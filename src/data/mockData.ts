export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  gradeLevel: string[];
}

export interface NewspaperIssue {
  id: string;
  issueNumber: string;
  date: string;
  coverImage: string;
  articles: {
    id: string;
    x: number; // percentage
    y: number; // percentage
    width: number; // percentage
    height: number; // percentage
    title: string;
  }[];
}

export const mockArticles: Record<string, Article> = {
  "a1": {
    id: "a1",
    title: "神奇的太空种子：从宇宙回来的植物有什么不同？",
    content: "小朋友们，你们知道吗？有些种子曾经乘坐宇宙飞船去过太空哦！\n\n在太空中，没有重力，还有很多宇宙射线。这些特殊的条件会让种子的基因发生变化。当它们回到地球被种下后，长出来的植物可能会变得更大、更强壮，或者结出更多更好吃的果实。\n\n科学家叔叔阿姨们通过这种方式，培育出了很多优良的农作物新品种，比如巨大的南瓜、长长的豆角。这叫做“航天育种”。是不是很神奇呢？",
    author: "星际探索者",
    date: "2026-03-15",
    gradeLevel: ["1", "2", "3", "4", "5", "6"]
  },
  "a2": {
    id: "a2",
    title: "为什么海水是咸的？",
    content: "每次去海边玩，如果不小心喝到海水，大家都会觉得特别咸。这是为什么呢？\n\n其实，海水里的盐分主要来自于陆地上的岩石。下雨的时候，雨水会溶解岩石里的一些矿物质（其中就包含盐分），然后汇聚成小溪、河流，最终流向大海。\n\n大海里的水在太阳的照射下会不断蒸发变成水蒸气，但是盐分却留在了海里。经过亿万年的积累，海水里的盐分越来越多，所以海水就变得非常咸啦！",
    author: "海洋小卫士",
    date: "2026-03-15",
    gradeLevel: ["1", "2", "3"]
  },
  "a3": {
    id: "a3",
    title: "人工智能如何改变我们的生活？",
    content: "人工智能（AI）听起来很高深，但其实它已经悄悄走进了我们的生活。\n\n比如，你家里有智能音箱吗？你可以让它放音乐、讲故事、查天气，这就是AI在帮你。还有爸爸妈妈手机里的导航软件，能自动规划最快的路线，这也是AI的功劳。\n\n未来，AI还会帮医生看病、帮司机开车，甚至可能成为你的学习小助手。我们要好好学习科学知识，将来也能参与创造更聪明的AI！",
    author: "科技前沿",
    date: "2026-03-15",
    gradeLevel: ["4", "5", "6"]
  }
};

export const mockIssues: NewspaperIssue[] = [
  {
    id: "issue-2026-03",
    issueNumber: "第 202603 期",
    date: "2026年3月",
    coverImage: "https://picsum.photos/seed/newspaper/800/1200", // Placeholder for newspaper background
    articles: [
      { id: "a1", x: 5, y: 10, width: 90, height: 30, title: "神奇的太空种子" },
      { id: "a2", x: 5, y: 45, width: 42, height: 40, title: "为什么海水是咸的？" },
      { id: "a3", x: 52, y: 45, width: 43, height: 40, title: "人工智能" }
    ]
  }
];
