console.log("Exercicio 3");

type Post = {
  autor: string;
  texto: string;
};


const post1: Post = {
  autor: "Alvo Dumbledore",
  texto: "Não vale a pena viver sonhando e se esquecer de viver",
};

const post2: Post = {
  autor: "Severo Snape",
  texto: "Menos 10 pontos para Grifinória!",
};
const post3: Post = {
  autor: "Hermione Granger",
  texto: "É levi-ô-sa, não levio-sá!",
};
const post4: Post = {
  autor: "Dobby",
  texto: "Dobby é um elfo livre!",
};

const post5: Post = {
  autor: "Lord Voldemort",
  texto: "Avada Kedavra!",
};

type posts = Post[];

const postsFeitos: posts = [post1, post2, post3, post4, post5];

//console.table(postsFeitos);


function buscarPostsPorAutor(posts:posts, autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

console.table(buscarPostsPorAutor(postsFeitos, "Hermione Granger"));