interface ServicesCardProps {
  cardTitle: string;
  cardBodyText: string;
}

export default function ServicesCard(
  { cardTitle, cardBodyText }: ServicesCardProps,
) {
  return (
    <div class="card card-xl max-w-xl bg-base-100 border-2 border-base-content/50 transition-colors shadow-lg">
      <div class="card-body">
        <h2 class="card-title text-xl sm:text-2xl md:text-3xl">{cardTitle}</h2>
        <p class="py-2 text-base text-justify leading-6 sm:leading-8 sm:text-lg">
          {cardBodyText}
        </p>
        <div class="card-actions justify-end">
          <a href="/contact" class="hover:cursor-pointer">
            <button type="button" class="btn btn-lg btn-soft hover:btn-accent">
              Find Out More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
