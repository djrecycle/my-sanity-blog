import NavbarHeader from "@/components/blog/NavbarHeader";
import HomepageMain from "@/components/blog/HomepageMain";

export const revalidate = 30;

const homeMetadata = {
  title: "Home | My Blog",
  description: "My Blog",
};

export default async function Home() {
  return (
    <>
      <title>{homeMetadata.title}</title>
      <NavbarHeader />
      <HomepageMain />
    </>
  );
}
