export default class WorkProvider {
  static getWorks() {
    return [
      {
        title: "Obra 1",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus doloribus eligendi odio libero, magni neque. Ut saepe voluptas est nostrum asperiores! Necessitatibus sunt, fuga dolorem eligendi amet cumque quia dolorum.",
        images: [
          {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
          },
          {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
          },
          {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
          },
        ],
      },
      {
        title: "Obra 2",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus doloribus eligendi odio libero, magni neque. Ut saepe voluptas est nostrum asperiores! Necessitatibus sunt, fuga dolorem eligendi amet cumque quia dolorum.",
        images: [],
      },
      {
        title: "Obra 3",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus doloribus eligendi odio libero, magni neque. Ut saepe voluptas est nostrum asperiores! Necessitatibus sunt, fuga dolorem eligendi amet cumque quia dolorum.",
        images: [],
      },
    ];
  }
}
