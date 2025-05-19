import { useLoaderData } from "react-router-dom";

const Github = () => {
  const userData = useLoaderData();
  // const [userData, setUserData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Er-Naren719")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUserData(data);
  //     })
  // }, []);

  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4">
      <p className="my-4 w-1/2 mx-auto text-left">Github API Data:</p>
      <div className="flex items-center justify-between w-1/2 mx-auto mb-10">
        <div className="text-left mx-auto w-1/2">
          <img src={userData.avatar_url} alt="Avatar" className="rounded-full w-32 h-32" />
        </div>
        <div className="text-left mx-auto w-1/2">
          <p>Username: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      </div>
    </div>
  )
};

export default Github;

export const GithubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/Er-Naren719");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
