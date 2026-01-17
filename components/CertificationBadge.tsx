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
    <div class="w-72 xl:w-48">
      <label for={`${imageSrc}_modal`} class="hover:cursor-pointer">
        <img src={imageSrc} alt={imageAlt} class="grayscale-100" />
      </label>
      <input type="checkbox" id={`${imageSrc}_modal`} class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <h4 class="text-lg font-bold">
            {certificationName} Certification
          </h4>
          <p class="pt-4 pb-2">
            You can view my {certificationName}{" "}
            certification to verify its authenticity.
          </p>
          <p class="pt-2 pb-4">
            Click the <strong>Download</strong> button to obtain a copy.
          </p>
          <div class="modal-action">
            <a
              href={`${certificationLink}`}
              class="btn"
              aria-label={`Download a copy of Harry's ${certificationName} certificate.`}
              download
            >
              Download
            </a>
            <label
              for={`${imageSrc}_modal`}
              class="btn btn-error text-white"
              aria-label="Close download certificate modal"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
