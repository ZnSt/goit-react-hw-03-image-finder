export const ImageGalleryItem = ({ data = [] }) => {
  console.log(data);
  return data.map(({ id, webformatURL, tags }) => (
    <li key={id}>
      <img src={webformatURL} alt={tags} width="300" />
    </li>
  ));
};
