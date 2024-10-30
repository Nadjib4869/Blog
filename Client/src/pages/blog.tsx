import { useParams, Link } from "react-router-dom";
import Post from "../../public/img/posts/post.jpg";
import UserPhoto from "../../public/img/users/user-1.jpeg";
import Aside from "../components/aside";
import { useQuery } from "react-query";
import axiosInstance from "../api/axiosInstance";

interface User {
  name: string;
  photo: string;
}
interface Post {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  category: string;
  imageCover: string;
  user: User;
  content: string;
}

const getPost = async (postId: string): Promise<Post> => {
  const res = await axiosInstance.get(`/posts/${postId}`);
  return res.data.data.doc;
};

export default function Blog() {
  const { postId } = useParams<{ postId: string }>();
  const { isLoading, isError, data, error } = useQuery<Post>(
    ["post", postId],
    () =>
      postId ? getPost(postId) : Promise.reject(new Error("Invalid post ID"))
  );

  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  return (
    <div className="">
      <section className="flex items-center justify-center">
        <div className="w-2/5 space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            {data ? data.title : ""}
          </h1>
          <div>
            <Link to={`/users/${data?.user?._id}`} className="flex items-center space-x-4">
              <img
                src={
                  data && data.user
                    ? `http://localhost:8000/img/users/${data.user.photo}`
                    : ""
                }
                className="rounded-full w-14 h-14"
                alt="User-photo"
              />
              <div className="text-xs">
                <h3>
                  <strong>
                    {data && data.user
                      ? data.user.name
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")
                      : ""}
                  </strong>
                </h3>
                <p>
                  {data
                    ? new Date(data.createdAt).toLocaleString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={
              data ? `http://localhost:8000/img/posts/${data.imageCover}` : ""
            }
            className="h-[280px] w-[480px]"
            alt="blog-photo"
          />
        </div>
      </section>
      <section className="flex justify-between px-20 mb-12 space-x-10 mt-7">
        <article className="w-2/3 space-y-7">
          <p className="text-wrap">
            {data ? data.content : ""}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            consequatur accusantium fugiat quas distinctio voluptatibus
            aspernatur non autem, minima aut et vel molestiae tempore iusto ut
            voluptatum dignissimos itaque dolore. Architecto accusantium nulla,
            minus, illum ipsa nam inventore cupiditate saepe laboriosam corrupti
            excepturi et debitis, unde non! Nesciunt, possimus mollitia,
            asperiores porro cumque eligendi, nostrum voluptatum quae error id
            assumenda! Quas distinctio odio, mollitia illum sit sunt, numquam
            excepturi asperiores, iste error in. Perferendis, vitae,
            reprehenderit quasi accusantium adipisci obcaecati, dicta
            exercitationem veritatis numquam debitis et nesciunt incidunt
            placeat dolorem! Doloribus et eveniet adipisci eum doloremque
            delectus magnam rem neque facere? Quam minus ad iure, numquam
            adipisci deserunt consequatur porro similique. Hic nemo provident
            numquam reiciendis est, ratione repudiandae repellendus. Molestiae
            commodi ratione debitis dolorem expedita ipsam, quaerat repellat
            libero quasi, veritatis, adipisci incidunt aspernatur eaque sunt
            cumque dicta blanditiis. Quas id natus qui voluptatum eius soluta
            dolor nam blanditiis? Repellendus dolore debitis ipsam nobis odit,
            necessitatibus esse? Aliquid, dolorem, consectetur maxime doloribus
            maiores nisi error necessitatibus ducimus numquam eius itaque
            asperiores voluptate veritatis? Minima est animi libero accusantium
            voluptate! Blanditiis exercitationem dolorem unde ducimus tempore,
            quibusdam eos natus nesciunt, esse quaerat nam, corporis maxime
            repellendus rem? Architecto a vel minus vero commodi, sit
            accusantium earum, ut sed explicabo dolore? Atque delectus sint
            natus nobis error explicabo, distinctio dolor id neque, ipsam
            officia animi. Recusandae nesciunt eum totam? Itaque nobis labore
            assumenda sed laudantium in minus reprehenderit est illum provident!
            Dicta aut adipisci sit quis tempore. Ipsam quisquam repellat
            repellendus, illum nam expedita assumenda dolore in magnam. Aliquam
            provident nemo nihil reprehenderit ducimus natus ex labore quia,
            laborum, blanditiis vero? Pariatur molestias a quas! Unde vero ipsam
            iusto, quisquam cumque omnis explicabo aut possimus ratione
            voluptates ducimus aspernatur quas, tenetur dignissimos animi
            nesciunt? Qui error distinctio possimus vel, odio mollitia! Nobis
            porro error vel ipsum necessitatibus quia sunt quaerat dolore! Error
            quis illo nostrum voluptates dolores odit sapiente voluptatum
            debitis nam quas, cum a ad! Et repellat dolores ad vitae. Fuga
            architecto provident voluptates officiis blanditiis hic nesciunt
            veritatis itaque maxime repudiandae consectetur ipsam labore est rem
            eligendi distinctio, totam ea et temporibus accusamus quis quo.
            Impedit, porro molestiae! Sed? Blanditiis ratione aliquam fuga enim
            in rem totam mollitia amet suscipit placeat ad nemo doloremque,
            quasi ex qui libero eius consectetur similique quo omnis quod quidem
            dolores magni voluptatibus? Magni. Harum et eum, praesentium
            tempora, velit commodi beatae quisquam, nemo autem facere molestiae
            quidem expedita maiores fuga? Earum eum dolorem, dolorum, at est
            soluta quis quae ullam eaque labore itaque! Quas ipsum dolorem autem
            nostrum laboriosam quis mollitia quod laudantium. Quis odio, magnam,
            praesentium non culpa excepturi voluptas eaque, quaerat voluptate
            error officiis ea libero harum earum pariatur. Laborum, natus?
            Deleniti quisquam fugit vitae voluptatum inventore velit illum,
            asperiores, eius laborum voluptate ut explicabo obcaecati, natus ex
            enim similique rem repudiandae. Sed quod voluptas doloribus! Veniam
            ipsa magnam reiciendis porro! Dolore maxime provident quos vitae
            officia, animi eos explicabo expedita? Facere pariatur sed impedit
            est, iste saepe nesciunt. Rerum facilis sint, omnis veritatis ad ex
            saepe sit dicta numquam nisi! Suscipit voluptas provident soluta
            quaerat dolor iste rerum quod, quae harum totam atque dignissimos.
            Inventore iusto commodi pariatur ullam nobis odio unde nostrum
            atque, rerum qui quos officia neque exercitationem! Libero quaerat
            praesentium ipsam fugit, alias quae veritatis. Modi animi molestias
            unde rerum officiis nostrum suscipit at ad quas eligendi, hic
            repellat, ex officia vitae alias autem eum maxime sint! Commodi
            architecto vitae magni quia repudiandae, iusto obcaecati non
            expedita exercitationem consectetur fugit totam officiis veritatis.
            Impedit dolorem ut nihil aliquid cum voluptatum repellendus, fugit
            nulla laboriosam veniam, aut debitis!
          </p>
          <div className="space-y-5">
            <h2>Comments</h2>
            {/* token ? (
              <p className="font-semibold underline underline-offset-4">Login to write a comment</p>
            ) : (
              <div>
                <textarea placeholder="write a comment..."></textarea>
                <button>Send</button>
              </div>
            ) */}
            <div>
              <div className="flex items-center space-x-4">
                <img
                  src={UserPhoto}
                  className="w-10 h-10 rounded-full"
                  alt="User-photo"
                />
                <div className="text-xs">
                  <h3>
                    <strong>Joseph Owen</strong>
                  </h3>
                  <p>08.10.2024</p>
                </div>
              </div>
              <p>comment</p>
            </div>
            <div>
              <div className="flex items-center space-x-4">
                <img
                  src={UserPhoto}
                  className="w-10 h-10 rounded-full"
                  alt="User-photo"
                />
                <div className="text-xs">
                  <h3>
                    <strong>Joseph Owen</strong>
                  </h3>
                  <p>08.10.2024</p>
                </div>
              </div>
              <p>comment</p>
            </div>
            <div>
              <div className="flex items-center space-x-4">
                <img
                  src={UserPhoto}
                  className="w-10 h-10 rounded-full"
                  alt="User-photo"
                />
                <div className="text-xs">
                  <h3>
                    <strong>Joseph Owen</strong>
                  </h3>
                  <p>08.10.2024</p>
                </div>
              </div>
              <p>comment</p>
            </div>
          </div>
        </article>
        <Aside />
      </section>
    </div>
  );
}
