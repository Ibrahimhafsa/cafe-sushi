export interface JournalPost {
  slug: string;
  img: string;
  date: string;
  cat: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const posts: JournalPost[] = [
  {
    slug: "exploring-delicious-sushi-options",
    img: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=1200",
    date: "16 May 2026",
    cat: "Sushi",
    title: "Exploring the Most Delicious Options for Every Taste",
    excerpt:
      "From classic California rolls to omakase tasting menus, we look at how London's love affair with sushi has grown into something remarkable.",
    content: [
      "The sushi scene in London has undergone a dramatic transformation over the last decade. What was once a niche dining experience has become a cornerstone of the city's culinary identity, with Cafe Sushi at the forefront of this evolution.",
      "Whether you are a newcomer to Japanese cuisine or a seasoned connoisseur, the variety of options available today is staggering. For those who prefer the classics, our traditional Nigiri highlights the pure flavor of the fish, seasoned lightly with premium soy and freshly grated wasabi.",
      "For the more adventurous, our signature rolls offer a contemporary twist. We combine traditional techniques with locally sourced, seasonal ingredients to create flavors that are both familiar and surprising. The balance of textures—from the crunch of tempura to the melt-in-your-mouth quality of fatty tuna—is what makes every bite an experience.",
      "At Cafe Sushi, we believe that great sushi starts with the relationship between the chef and the ingredients. Every morning, we select only the finest catch, ensuring that what arrives on your plate is a testament to the sea's bounty and our dedication to craft.",
    ],
  },
  {
    slug: "creative-sushi-fusion-recipes",
    img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=1200",
    date: "12 Apr 2026",
    cat: "Fusion",
    title: "Creative Sushi Fusion Recipes That Are Redefining the Roll",
    excerpt:
      "Our head chef explores the growing fusion trend and shares the thinking behind Cafe Sushi's most innovative new dishes.",
    content: [
      "Fusion in the world of sushi is often misunderstood. It is not about abandoning tradition, but about expanding the conversation between different culinary cultures. At Cafe Sushi, our fusion philosophy is rooted in deep respect for Japanese fundamentals.",
      "Our head chef, Hiroshi, has spent years experimenting with global ingredients that complement the delicate nature of raw fish. 'The goal is to enhance, not overwhelm,' he explains. This approach has led to some of our most beloved creations, such as our Truffle-Infused Yellowtail or the Spicy Miso Seabass roll.",
      "One of the key elements in our fusion dishes is the use of non-traditional sauces. By incorporating elements like Peruvian aji amarillo or Mediterranean citrus, we create a brightness that cuts through the richness of the fish. These are not just gimmicks; they are carefully balanced compositions designed to excite the palate.",
      "As we continue to push the boundaries of what a sushi roll can be, we remain committed to the quality of our base ingredients. No matter how creative the topping, the rice must be perfect, and the fish must be pristine. That is the Cafe Sushi promise.",
    ],
  },
  {
    slug: "cultural-historical-journey-of-sushi",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200",
    date: "3 Apr 2026",
    cat: "Culture",
    title: "The Cultural and Historical Journey of Sushi",
    excerpt:
      "Sushi has a 1,200-year history. Here is a short guide to where it came from, how it evolved, and why it matters so much today.",
    content: [
      "To understand sushi, one must look back over a millennium to the rice paddies of Southeast Asia. Originally, sushi (known as narezushi) was a method of preserving fish in fermented rice. The rice was discarded, and only the fish was consumed.",
      "It wasn't until the Edo period in Japan (1603–1867) that sushi began to resemble what we recognize today. Hanaya Yohei is often credited with inventing nigirizushi—hand-pressed sushi that could be eaten quickly with the hands. This was the birth of 'fast food' in Tokyo, designed for busy workers on the move.",
      "Sushi carries with it a philosophy of 'Omotenashi'—the Japanese art of selfless hospitality. Every detail, from the way the ginger is sliced to the temperature of the green tea, is considered with the guest's comfort in mind. This spirit is what we strive to recreate every day at Cafe Sushi.",
      "Today, sushi is a global phenomenon, yet its core remains unchanged: it is an celebration of simplicity and freshness. As we look to the future, we honor these 1,200 years of history by maintaining the standards of excellence set by the masters before us.",
    ],
  },
];
