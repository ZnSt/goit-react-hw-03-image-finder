import catCry from '../../image/catCry.jpg';
import { ErrorContainer, ErrorText } from './ImageErrorView.styled';

export const ImageErrorView = ({ message }) => {
  return (
    <ErrorContainer>
      <img src={catCry} width="600" alt="sadcat" />
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
};
