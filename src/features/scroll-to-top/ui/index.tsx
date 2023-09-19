import { useWindowScroll } from '@mantine/hooks';
import { UpButton } from '@shared/ui/up-button';

export const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const handleClick = () => {
    scrollTo({ y: 0 });
  };

  return (
    <>
      {scroll.y > 100 && (
        <UpButton pos={'fixed'} bottom={20} right={20} w={60} h={60} onClick={handleClick} />
      )}
    </>
  );
};
