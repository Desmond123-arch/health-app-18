"use client";
import { Card, Carousel } from "@/components/ui/carousel";

interface Item {
  title: string;
  description: string;
  videoId: string;
  funFacts: string[];
}

interface DummyContentProps {
  item: Item;
}

const DummyContent: React.FC<DummyContentProps> = ({ item }) => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            {index === 0 && (
              <>
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200 text-xl md:text-3xl mb-4">
                  All About {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
                  {item.description}
                </p>
              </>
            )}
            {index === 1 && (
              <>
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200 text-xl md:text-3xl mb-4">
                  Watch and Learn!
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={`Learn about ${item.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </>
            )}
            {index === 2 && (
              <>
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200 text-xl md:text-3xl mb-4">
                  Fun Facts about {item.title}
                </h3>
                <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
                  {item.funFacts.map((fact, index) => (
                    <li key={index} className="mb-2">
                      {fact}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export function KidsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Fruit",
    title: "Apples",
    src: "https://images.unsplash.com/photo-1569870499705-504209102861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Apples are crunchy, juicy fruits that come in many colors like red, green, and yellow. They're packed with fiber and vitamins, making them a perfect healthy snack. Eating an apple a day might really keep the doctor away!",
    videoId: "zFGYa5hwtyc",
    funFacts: [
      "There are over 7,500 varieties of apples grown around the world.",
      "Apples float in water because 25% of their volume is air.",
      "The science of apple growing is called pomology.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Apples",
          description:
            "Apples are crunchy, juicy fruits that come in many colors like red, green, and yellow. They're packed with fiber and vitamins, making them a perfect healthy snack. Eating an apple a day might really keep the doctor away!",
          videoId: "zFGYa5hwtyc",
          funFacts: [
            "There are over 7,500 varieties of apples grown around the world.",
            "Apples float in water because 25% of their volume is air.",
            "The science of apple growing is called pomology.",
          ],
        }}
      />
    ),
  },
  {
    category: "Vegetable",
    title: "Carrots",
    src: "https://images.unsplash.com/photo-1445282768818-728615cc910a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Carrots are crunchy, orange vegetables that grow underground. They're famous for being good for your eyes because they're full of beta-carotene. Carrots are versatile and can be eaten raw, cooked, or even juiced!",
    videoId: "hJoLmI7_FRA",
    funFacts: [
      "Carrots were originally purple or white. Orange carrots were created by Dutch growers in the 16th century.",
      "The world's longest carrot was over 20 feet long!",
      "Carrots can be used to make a natural hair dye.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Carrots",
          description:
            "Carrots are crunchy, orange vegetables that grow underground. They're famous for being good for your eyes because they're full of beta-carotene. Carrots are versatile and can be eaten raw, cooked, or even juiced!",
          videoId: "hJoLmI7_FRA",
          funFacts: [
            "Carrots were originally purple or white. Orange carrots were created by Dutch growers in the 16th century.",
            "The world's longest carrot was over 20 feet long!",
            "Carrots can be used to make a natural hair dye.",
          ],
        }}
      />
    ),
  },
  {
    category: "Fruit",
    title: "Bananas",
    src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Bananas are sweet, curved fruits with a yellow peel. They're packed with potassium, which is great for your heart and muscles. Bananas are nature's energy bars, perfect for a quick snack or adding to your breakfast!",
    videoId: "p62xpJPb0m4",
    funFacts: [
      "Bananas are berries, but strawberries aren't!",
      "A cluster of bananas is called a 'hand', and a single banana is called a 'finger'.",
      "Bananas are slightly radioactive due to their potassium content, but you'd need to eat 10 million bananas at once to get sick from the radiation.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Bananas",
          description:
            "Bananas are sweet, curved fruits with a yellow peel. They're packed with potassium, which is great for your heart and muscles. Bananas are nature's energy bars, perfect for a quick snack or adding to your breakfast!",
          videoId: "p62xpJPb0m4",
          funFacts: [
            "Bananas are berries, but strawberries aren't!",
            "A cluster of bananas is called a 'hand', and a single banana is called a 'finger'.",
            "Bananas are slightly radioactive due to their potassium content, but you'd need to eat 10 million bananas at once to get sick from the radiation.",
          ],
        }}
      />
    ),
  },
  {
    category: "Vegetable",
    title: "Broccoli",
    src: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3",
    description:
      "Broccoli is a green vegetable that looks like tiny trees. It's packed with vitamins and minerals, making it a superfood. Broccoli can be eaten raw, steamed, or roasted for a delicious and healthy addition to any meal!",
    videoId: "GYMJv4xIvpA",
    funFacts: [
      "Broccoli is a member of the cabbage family.",
      "The word 'broccoli' comes from the Italian word 'broccolo', which means 'the flowering crest of a cabbage'.",
      "Broccoli has more vitamin C than an orange!",
    ],
    content: (
      <DummyContent
        item={{
          title: "Broccoli",
          description:
            "Broccoli is a green vegetable that looks like tiny trees. It's packed with vitamins and minerals, making it a superfood. Broccoli can be eaten raw, steamed, or roasted for a delicious and healthy addition to any meal!",
          videoId: "GYMJv4xIvpA",
          funFacts: [
            "Broccoli is a member of the cabbage family.",
            "The word 'broccoli' comes from the Italian word 'broccolo', which means 'the flowering crest of a cabbage'.",
            "Broccoli has more vitamin C than an orange!",
          ],
        }}
      />
    ),
  },
  {
    category: "Fruit",
    title: "Strawberries",
    src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    description:
      "Strawberries are sweet, red berries with tiny seeds on their surface. They're juicy, delicious, and packed with vitamin C. Strawberries are perfect for eating fresh, adding to desserts, or blending into smoothies!",
    videoId: "AHGmDTqpGz4",
    funFacts: [
      "Strawberries are the only fruit with seeds on the outside.",
      "There are 200 seeds on an average strawberry.",
      "Strawberries are members of the rose family!",
    ],
    content: (
      <DummyContent
        item={{
          title: "Strawberries",
          description:
            "Strawberries are sweet, red berries with tiny seeds on their surface. They're juicy, delicious, and packed with vitamin C. Strawberries are perfect for eating fresh, adding to desserts, or blending into smoothies!",
          videoId: "AHGmDTqpGz4",
          funFacts: [
            "Strawberries are the only fruit with seeds on the outside.",
            "There are 200 seeds on an average strawberry.",
            "Strawberries are members of the rose family!",
          ],
        }}
      />
    ),
  },
  {
    category: "Vegetable",
    title: "Tomatoes",
    src: "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    description:
      "Tomatoes are red, juicy fruits that are often used as vegetables in cooking. They're full of vitamins and antioxidants, making them super healthy. Tomatoes can be eaten raw, cooked in sauces, or used in salads!",
    videoId: "uVSm0ebT0eU",
    funFacts: [
      "Tomatoes are technically a fruit, but they're used as a vegetable in cooking.",
      "There are over 10,000 varieties of tomatoes.",
      "The fear of tomatoes is called 'lycopersicophobia'.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Tomatoes",
          description:
            "Tomatoes are red, juicy fruits that are often used as vegetables in cooking. They're full of vitamins and antioxidants, making them super healthy. Tomatoes can be eaten raw, cooked in sauces, or used in salads!",
          videoId: "uVSm0ebT0eU",
          funFacts: [
            "Tomatoes are technically a fruit, but they're used as a vegetable in cooking.",
            "There are over 10,000 varieties of tomatoes.",
            "The fear of tomatoes is called 'lycopersicophobia'.",
          ],
        }}
      />
    ),
  },
  {
    category: "Fruit",
    title: "Oranges",
    src: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    description:
      "Oranges are round, citrus fruits with a bright orange peel. They're famous for being high in vitamin C and having a refreshing, tangy flavor. Oranges can be eaten fresh, juiced, or used to add flavor to many recipes!",
    videoId: "7YvrPn6F5Ss",
    funFacts: [
      "The name 'orange' comes from the Sanskrit word for the orange tree: 'naranga'.",
      "Oranges are actually a type of berry.",
      "Brazil produces more oranges than any other country in the world.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Oranges",
          description:
            "Oranges are round, citrus fruits with a bright orange peel. They're famous for being high in vitamin C and having a refreshing, tangy flavor. Oranges can be eaten fresh, juiced, or used to add flavor to many recipes!",
          videoId: "7YvrPn6F5Ss",
          funFacts: [
            "The name 'orange' comes from the Sanskrit word for the orange tree: 'naranga'.",
            "Oranges are actually a type of berry.",
            "Brazil produces more oranges than any other country in the world.",
          ],
        }}
      />
    ),
  },
  {
    category: "Vegetable",
    title: "Spinach",
    src: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    description:
      "Spinach is a leafy green vegetable that's packed with nutrients. It's known for making you strong and healthy, just like Popeye! Spinach can be eaten raw in salads, cooked in many dishes, or blended into smoothies.",
    videoId: "9L8NkZFyBwo",
    funFacts: [
      "Spinach is over 90% water.",
      "China is the world's largest producer of spinach.",
      "Spinach leaves grow bigger when exposed to artificial light.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Spinach",
          description:
            "Spinach is a leafy green vegetable that's packed with nutrients. It's known for making you strong and healthy, just like Popeye! Spinach can be eaten raw in salads, cooked in many dishes, or blended into smoothies.",
          videoId: "9L8NkZFyBwo",
          funFacts: [
            "Spinach is over 90% water.",
            "China is the world's largest producer of spinach.",
            "Spinach leaves grow bigger when exposed to artificial light.",
          ],
        }}
      />
    ),
  },
  {
    category: "Fruit",
    title: "Grapes",
    src: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    description:
      "Grapes are small, round fruits that grow in clusters. They come in different colors like green, red, and purple. Grapes are sweet and juicy, perfect for snacking, adding to fruit salads, or making into raisins!",
    videoId: "qxVhEVXHBDQ",
    funFacts: [
      "There are more than 8,000 varieties of grapes.",
      "Grapes are actually berries.",
      "Some grape varieties can be used to make raisins, wine, jelly, juice, and vinegar.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Grapes",
          description:
            "Grapes are small, round fruits that grow in clusters. They come in different colors like green, red, and purple. Grapes are sweet and juicy, perfect for snacking, adding to fruit salads, or making into raisins!",
          videoId: "qxVhEVXHBDQ",
          funFacts: [
            "There are more than 8,000 varieties of grapes.",
            "Grapes are actually berries.",
            "Some grape varieties can be used to make raisins, wine, jelly, juice, and vinegar.",
          ],
        }}
      />
    ),
  },
  {
    category: "Vegetable",
    title: "Bell Peppers",
    src: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
    description:
      "Bell peppers are colorful vegetables that come in green, red, yellow, and orange. They have a crunchy texture and a slightly sweet taste. Bell peppers are great for eating raw, cooking in stir-fries, or stuffing with other foods!",
    videoId: "nBjJK3g1X-k",
    funFacts: [
      "All bell peppers start out green, then change color as they ripen.",
      "Red bell peppers have more vitamin C than oranges.",
      "Bell peppers are fruits botanically, but they're used as vegetables in cooking.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Bell Peppers",
          description:
            "Bell peppers are colorful vegetables that come in green, red, yellow, and orange. They have a crunchy texture and a slightly sweet taste. Bell peppers are great for eating raw, cooking in stir-fries, or stuffing with other foods!",
          videoId: "nBjJK3g1X-k",
          funFacts: [
            "All bell peppers start out green, then change color as they ripen.",
            "Red bell peppers have more vitamin C than oranges.",
            "Bell peppers are fruits botanically, but they're used as vegetables in cooking.",
          ],
        }}
      />
    ),
  },
  {
    category: "Fruit",
    title: "Watermelon",
    src: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    description:
      "Watermelon is a large, juicy fruit with a green rind and sweet, red flesh inside. It's full of water, making it perfect for staying hydrated on hot days. Watermelon is delicious eaten fresh, added to fruit salads, or blended into refreshing drinks!",
    videoId: "v7YhHILiGE0",
    funFacts: [
      "Watermelon is 92% water.",
      "The first recorded watermelon harvest occurred in Egypt 5,000 years ago.",
      "The heaviest watermelon on record weighed 350.5 pounds (159 kg)!",
    ],
    content: (
      <DummyContent
        item={{
          title: "Watermelon",
          description:
            "Watermelon is a large, juicy fruit with a green rind and sweet, red flesh inside. It's full of water, making it perfect for staying hydrated on hot days. Watermelon is delicious eaten fresh, added to fruit salads, or blended into refreshing drinks!",
          videoId: "v7YhHILiGE0",
          funFacts: [
            "Watermelon is 92% water.",
            "The first recorded watermelon harvest occurred in Egypt 5,000 years ago.",
            "The heaviest watermelon on record weighed 350.5 pounds (159 kg)!",
          ],
        }}
      />
    ),
  },
  {
    category: "Vegetable",
    title: "Cucumbers",
    src: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    description:
      "Cucumbers are long, green vegetables with a cool, crisp texture. They're very refreshing and have a high water content. Cucumbers are great for eating raw in salads, making into pickles, or adding to sandwiches for extra crunch!",
    videoId: "lLMJiMgqPj4",
    funFacts: [
      "Cucumbers are actually fruits, botanically speaking.",
      "Cucumbers are 96% water, making them very hydrating.",
      "The phrase 'cool as a cucumber' comes from the fact that the inside of a cucumber can be up to 20 degrees cooler than the outside air.",
    ],
    content: (
      <DummyContent
        item={{
          title: "Cucumbers",
          description:
            "Cucumbers are long, green vegetables with a cool, crisp texture. They're very refreshing and have a high water content. Cucumbers are great for eating raw in salads, making into pickles, or adding to sandwiches for extra crunch!",
          videoId: "lLMJiMgqPj4",
          funFacts: [
            "Cucumbers are actually fruits, botanically speaking.",
            "Cucumbers are 96% water, making them very hydrating.",
            "The phrase 'cool as a cucumber' comes from the fact that the inside of a cucumber can be up to 20 degrees cooler than the outside air.",
          ],
        }}
      />
    ),
  },
];
