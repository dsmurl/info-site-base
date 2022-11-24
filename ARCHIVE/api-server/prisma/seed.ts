import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const articleData: Prisma.ArticleCreateInput[] = [
  {
    title: "Tittok is bad",
    url: "https://www.thegatewaypundit.com/2022/11/democrat-sen-mark-warner-admits-trump-right-tiktok-enormous-threat-video/",
    createDate: new Date(),
    lastUpdate: new Date(),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const article of articleData) {
    const newArticle = await prisma.article.create({
      data: article,
    });
    console.log(`Created article with id: ${newArticle.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
