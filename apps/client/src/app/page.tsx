import {
  PromotionVideo,
  Footer,
  SlotMachine,
  MainPageContent,
  MainPageHeader,
} from 'client/components';

export default function Home() {
  return (
    <>
      <MainPageHeader />
      <PromotionVideo />
      <SlotMachine />
      <MainPageContent />
      <Footer />
    </>
  );
}
