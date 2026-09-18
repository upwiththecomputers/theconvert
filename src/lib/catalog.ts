export type WorkMeta = {
  slug: string;
  title: string;
  latin: string;
  year: string;
  translator: string;
  summary: string;
  image: string;
  imageAlt: string;
  kind: string;
};

export const CATALOG: WorkMeta[] = [
  {
    slug: "confessions",
    title: "Confessions",
    latin: "Confessiones",
    year: "c. 397–400",
    translator: "E. B. Pusey",
    kind: "Autobiography & prayer",
    image: "/images/augustine-heart.svg",
    imageAlt:
      "Saint Augustine holding a flaming heart, a classical painting digitized into black ink dots",
    summary:
      "Thirteen books of prayer in which Augustine recounts his restlessness, his conversion in a Milan garden, and the God who is nearer than his own heart.",
  },
  {
    slug: "city-of-god",
    title: "The City of God",
    latin: "De Civitate Dei",
    year: "c. 413–426",
    translator: "Marcus Dods",
    kind: "Theology of history",
    image: "/images/augustine-desk.svg",
    imageAlt:
      "Saint Augustine writing at his desk, digitized into black ink dots on cream paper",
    summary:
      "A vast reply to those who blamed Christ for Rome's fall: two cities, two loves, and the pilgrimage of a people whose commonwealth is not of this world.",
  },
  {
    slug: "on-christian-doctrine",
    title: "On Christian Doctrine",
    latin: "De Doctrina Christiana",
    year: "c. 397 / 426",
    translator: "J. F. Shaw",
    kind: "Hermeneutics",
    image: "/images/augustine-scholar.svg",
    imageAlt:
      "Augustine in his study after Botticelli, digitized as a black-dot plate",
    summary:
      "How to read, and how to speak: a handbook of interpretation in which things are either to be used or enjoyed, and all enjoyment is ordered toward God.",
  },
  {
    slug: "soliloquies",
    title: "Soliloquies",
    latin: "Soliloquia",
    year: "c. 386–387",
    translator: "Charles C. Starbuck",
    kind: "Inner dialogue",
    image: "/images/augustine-heart.svg",
    imageAlt: "Saint Augustine holding a flaming heart, digitized in black ink",
    summary:
      "Written after the garden and before baptism: Reason speaks with Augustine in the night, and the only things he desires to know are God and the soul.",
  },
  {
    slug: "enchiridion",
    title: "Enchiridion",
    latin: "Enchiridion ad Laurentium",
    year: "c. 421",
    translator: "J. F. Shaw",
    kind: "Handbook of faith",
    image: "/images/augustine-desk.svg",
    imageAlt: "Augustine at study with a child, digitized into black ink dots",
    summary:
      "A little book for Laurentius: faith, hope, and charity as the whole of piety, and a map of what a Christian ought to believe, hope, and love.",
  },
  {
    slug: "on-the-trinity",
    title: "On the Trinity",
    latin: "De Trinitate",
    year: "c. 399–419",
    translator: "Arthur West Haddan",
    kind: "Dogmatic theology",
    image: "/images/augustine-scholar.svg",
    imageAlt: "Augustine in his study, digitized after Botticelli in black ink",
    summary:
      "Fifteen books seeking the triune God in Scripture and then in the image of God in the mind: memory, understanding, and will as a created vestige of Three who are One.",
  },
];
