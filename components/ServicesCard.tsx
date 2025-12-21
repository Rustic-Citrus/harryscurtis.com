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
    <div class="card flex-col w-5/6 min-h-160 bg-base-200 border border-base-content/50 transition-colors shadow-md mx-4 lg:w-full lg:mx-0 lg:max-w-3/4 lg:min-h-xl">
      <figure class="max-h-64">
        <img
          src={imageUrl}
          class="object-none shadow-lg opacity-50"
          alt={imageAlt}
          title={imageTitle}
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-3xl">{cardTitle}</h2>
        <p class="py-2 text-lg">{cardBodyText}</p>
      </div>
    </div>
  );
}
