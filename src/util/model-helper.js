const { pascal } = require('case');

const ModelHelper = function (model, models) {
  this.model = model;
  this.models = models;
};

ModelHelper.prototype.containsManyFrom = function (model, opts = {}) {
  const AssocName = pascal(opts.as || model.options.name.plural);
  const options = Object.assign({}, opts);
  this.model[AssocName] = this.model.hasMany(model, options);
  return this;
};

ModelHelper.prototype.isChildOf = function (model, opts = {}) {
  const AssocName = pascal(opts.as || model.options.name.singular);
  const options = Object.assign({
    onDelete: 'CASCADE',
    foreignKey: {
      allowNull: false
    }
  }, opts);
  this.model[AssocName] = this.model.belongsTo(model, options);
  return this;
};

ModelHelper.prototype.hasCategories = function (opts = {}) {
  const AssocName = pascal(opts.as || 'categories');
  const CategoriesModel = this.models.categories;
  const options = Object.assign({
    through: {
      model: this.models['item-categories'],
      unique: false,
      scope: {
        itemType: this.model.options.name.plural
      }
    },
    foreignKey: 'itemId',
    constraints: false
  }, opts);
  this.model[AssocName] = this.model.belongsToMany(CategoriesModel, options);

  const ItemAssocName = pascal(this.model.options.name.plural);
  CategoriesModel[ItemAssocName] = CategoriesModel.belongsToMany(this.model, {
    through: {
      model: this.models['item-categories'],
      unique: false
    },
    foreignKey: 'categoryId',
    constraints: false
  });
  return this;
};

/**
 * Builds a compound index for a Model. Compound indexes
 * are derived from the values of multiple fields. This
 * ensures that a combination of fields must be unique. For example,
 * if a coupound index is defined for columns A and B, then
 * no two objects can have the same values for BOTH A and B.
 */
ModelHelper.prototype.hasComposedIndexWith = function (/* ...fieldNames */) {
  const args = Array.prototype.slice.call(arguments);
  const key = args.join('_');
  const model = this.model;

  args.forEach(function (fieldName) {
    model.attributes[fieldName].unique = key;
    model.rawAttributes[fieldName].unique = key;
  });

  this.model.refreshAttributes();
  return this;
};

ModelHelper.subject = function (model, models) {
  return new ModelHelper(model, models);
};

module.exports = ModelHelper;
