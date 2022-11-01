import { Item, Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ data = [] }) => {
  console.log(data);
  return data.map(({ id, webformatURL, tags }) => (
    <Item key={id}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  ));
};
