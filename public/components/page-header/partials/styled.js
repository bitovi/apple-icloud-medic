import styled from 'styled-components';

const ComponentWrapper = styled.div`
  &&& {
    background-color: #F7F7F7;
    width: 100%;
    .description {
      margin-left: 1.5em;
    }
    .page-nav {
      border-top: 1px solid rgba(34, 36, 38, 0.15);
      border-bottom: 1px solid rgba(34, 36, 38, 0.15);
      width: 100%;
      a {
        color: #444444;
      }
    }
    .active {
      color: #2185d0 !important;
      border-color: #2185d0 !important;
    }
  }
`;

export { ComponentWrapper };
