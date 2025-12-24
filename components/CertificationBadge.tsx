interface CertificationBadgeProps {
  imageSrc: string;
  imageAlt: string;
  certificationLink: string;
  certificationName: string;
}

export default function CertificationBadge(
  { imageSrc, imageAlt, certificationLink, certificationName }:
    CertificationBadgeProps,
) {
  return (
    <div class="w-64">
      <a
        href={certificationLink}
        class="hover:cursor-pointer"
        title={`Download a copy of Harry's ${certificationName} certification.`}
        download
      >
        <img src={imageSrc} alt={imageAlt} class="grayscale-75" />
      </a>
    </div>
  );
}
