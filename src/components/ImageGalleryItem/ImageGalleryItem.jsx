import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, openModal, id }) => {
  return (
    <>
      <Item onClick={() => openModal(id)}>
        <Image src={webformatURL} alt={tags} />
      </Item>
    </>
  );
};
