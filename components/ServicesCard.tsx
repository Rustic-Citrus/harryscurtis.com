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
    <div class="card flex-col w-full bg-base-200 border border-base-content/50 transition-colors shadow-md mx-4">
      <figure class="max-h-64">
        <img
          src={imageUrl}
          class="object-contain opacity-67"
          alt={imageAlt}
          title={imageTitle}
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-xl sm:text-2xl md:text-3xl">{cardTitle}</h2>
        <p class="py-2 text-sm text-justify sm:text-base">{cardBodyText}</p>
      </div>
    </div>
  );
}
