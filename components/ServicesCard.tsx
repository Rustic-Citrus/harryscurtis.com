interface ServicesCardProps {
  cardTitle: string;
  cardBodyText: string;
}

export default function ServicesCard(
  { cardTitle, cardBodyText }: ServicesCardProps,
) {
  return (
    <div class="card card-xl max-w-xl bg-base-100 border-2 border-base-content/50 transition-colors shadow-lg">
      <div class="card-body px-4 sm:px-8 md:px-12">
        <h3 class="card-title text-xl sm:text-2xl md:text-3xl">{cardTitle}</h3>
        <p class="py-2 text-base text-justify leading-6 sm:leading-8 sm:text-lg">
          {cardBodyText}
        </p>
      </div>
    </div>
  );
}
