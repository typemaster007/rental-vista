function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const Blogs = [
    {
        title: "Culpa eu laboris incididunt enim occaecat sunt.",
        author: "Commodo labore",
        description: "Adipisicing cillum consectetur incididunt qui est. Reprehenderit aute fugiat laboris aliquip anim Lorem. Exercitation nisi nulla cupidatat deserunt aute. Officia voluptate consequat ullamco sint ex elit esse culpa ex id aliquip nisi occaecat veniam. Laborum tempor ad eu id laboris dolore proident enim laboris in dolore.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Aute qui mollit ad officia proident aute.",
        author: "Nisi excepteur",
        description: "Anim anim pariatur ipsum sunt sit labore eiusmod et consectetur commodo laboris. Ea mollit et exercitation in fugiat laborum. Amet esse ex excepteur et sunt occaecat excepteur veniam qui mollit voluptate laborum non amet. Veniam quis minim esse est nisi eu consectetur sunt aliquip anim. Dolore sint esse est consectetur. Nisi officia sunt culpa officia ad in deserunt culpa qui velit consequat cupidatat. Aute nisi ut nostrud ipsum amet duis.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Sit laborum culpa nulla do Lorem nisi veniam est enim ex excepteur exercitation nostrud eu.",
        author: "Aliqua exercitation",
        description: "Dolore nulla mollit Lorem ea incididunt mollit esse esse. Occaecat amet officia ullamco Lorem quis anim irure ea nulla esse mollit. Consequat duis adipisicing ad duis cupidatat duis excepteur. Officia ipsum irure mollit incididunt ex anim incididunt ea officia veniam labore sit in ea. Do mollit amet ad reprehenderit laboris. Incididunt enim irure nisi elit ea aliqua nostrud deserunt Lorem culpa cillum. Excepteur aliquip aliqua et Lorem est eiusmod amet officia deserunt eiusmod sint eiusmod aliqua esse.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Eu mollit voluptate sit irure deserunt enim cupidatat culpa labore id reprehenderit.",
        author: "Amet veniam",
        description: "Excepteur sunt aliqua voluptate minim ex non velit. Ad dolore in sit ad voluptate. Officia labore duis est ullamco non tempor officia.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Fugiat nostrud sunt Lorem non qui nisi ea Lorem anim in excepteur irure.",
        author: "Aliqua culpa",
        description: "Reprehenderit id est sunt sit voluptate excepteur aute. Enim tempor amet culpa sunt consequat voluptate enim excepteur eu enim deserunt dolor nostrud elit. Velit in culpa incididunt aliqua.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Magna esse esse aute amet aliqua eu dolor labore adipisicing velit nisi labore elit ullamco.",
        author: "Officia dolor",
        description: "Duis voluptate laborum excepteur voluptate ullamco enim veniam. Non dolor cillum anim labore. Excepteur laborum veniam ea qui nisi exercitation dolore commodo do duis irure.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Aliquip deserunt et non labore.",
        author: "Incididunt enim",
        description: "Sunt do cillum magna reprehenderit ea cupidatat. Reprehenderit amet officia aliqua non incididunt magna nulla adipisicing. Enim anim ad est occaecat.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Consequat velit quis exercitation officia excepteur excepteur exercitation officia tempor incididunt aute do esse.",
        author: "Anim incididunt",
        description: "Culpa cupidatat fugiat nisi tempor laboris in minim ex. Eiusmod irure non et aliquip fugiat dolor eu anim in aliqua est labore. Deserunt eiusmod proident minim nisi officia commodo aliquip minim laborum qui duis ipsum. Cupidatat laborum duis anim fugiat sit voluptate sit fugiat et.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Do aute culpa mollit ad labore cillum.",
        author: "Ipsum magna",
        description: "Magna magna aliqua esse magna quis esse do laboris in tempor deserunt ut. Aute esse Lorem nostrud esse do et esse duis mollit est qui excepteur. Officia enim culpa Lorem sunt commodo est ut anim labore ad laborum dolore incididunt. Fugiat quis ex velit qui ut. Occaecat sunt do est sit commodo eiusmod consequat dolore duis excepteur do Lorem.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    },
    {
        title: "Cillum id incididunt in non eu laborum in aliqua aliquip enim anim adipisicing eu.",
        author: "Est culpa",
        description: "Sint in non Lorem consequat est sit in do quis tempor aute do labore excepteur. Nulla et commodo eu sit nulla consequat dolore irure deserunt aute officia cupidatat sit nisi. Mollit non non id aliqua aute ut. Cupidatat laboris sit voluptate anim officia reprehenderit incididunt sit dolore mollit eu. Esse cillum dolore adipisicing consequat reprehenderit voluptate est est sit sint laborum officia. Fugiat quis proident labore excepteur mollit laborum esse consectetur officia sint.",
        image: `https://via.placeholder.com/150C/${getRandomColor()}`
    }
]

export default Blogs;