interface ServicesCardProps {
  imageUrl: string;
  imageAlt: string;
  imageTitle: string;
  cardTitle: string;
  cardBodyText: string;
}

export default function ServicesCard(
  { imageUrl, imageAlt, imageTitle, cardTitle, cardBodyText }:
    ServicesCardProps,
) {
  return (
    <div class="card flex-col flex-1 w-3/4 sm:w-1/2 xl:w-full image-full border border-base-content/50 transition-colors shadow-md mx-4">
      <figure>
        <img
          src={imageUrl}
          alt={imageAlt}
          title={imageTitle}
        />
      </figure>
      <div class="card-body text-blue-50">
        <h2 class="card-title text-xl sm:text-2xl md:text-3xl">{cardTitle}</h2>
        <p class="py-2 text-base text-justify leading-6 sm:leading-8 sm:text-lg">
          {cardBodyText}
        </p>
      </div>
    </div>
  );
}
