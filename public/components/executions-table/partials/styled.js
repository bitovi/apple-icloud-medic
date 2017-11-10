import styled from 'styled-components';

const ComponentWrapper = styled.div`

`;

const ModalLabel = styled.span`
  cursor: pointer;
  .icon {
    opacity: .3;
    transform: scaleX(-1); // flip horizontal
    margin-left: .2em;
  }
  :hover .icon {
    opacity: 1;
  }
`;

export { ComponentWrapper, ModalLabel };
