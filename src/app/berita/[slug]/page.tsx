import { BeritaDetailWrapper } from "@/features/berita";

interface Params {
  slug: string;
}

export default function BeritaDetailPage({ params }: { params: Params }) {
  return <BeritaDetailWrapper slug={params.slug} />;
}
