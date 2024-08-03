import Header from '../components/Header';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

const categories = [
  {
    imgSrc:
      'https://images.unsplash.com/photo-1530011940847-04cba36df39f?q=80&w=1920',
    imgAlt:
      'Two female models sitting on a bed. Photo by Billie (@billiebodybrand) on Unsplash.',
    href: '/women',
    linkText: 'Women Clothing',
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1595909315417-2edd382a56dc?q=80&w=1920',
    imgAlt:
      'Jumping rope, smartphone, sports bra, a pair of sneakers, and a water bottle. Photo by erica steeves on Unsplash.',
    href: '/accessories',
    linkText: 'Accessories',
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1467779009031-53938b78ca38?q=80&w=1920',
    imgAlt: 'Group of men sitting in a van. Photo by Luke Porter on Unsplash.',
    href: '/men',
    linkText: 'Men Clothing',
  },
];

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Hero companyName="Vogue Junction" />
        <CategorySection categories={categories} />
      </main>
      <Footer />
    </>
  );
}
