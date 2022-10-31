import catCry from '../../image/catCry.jpg';
export const ImageErrorView = ({ message }) => {
  return (
    <div>
      <img src={catCry} width="400" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
};
