// import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
// import "./Project.scss";
// import Button from "../../components/button/Button";
// import {openSource, socialMediaLinks} from "../../portfolio";
// import StyleContext from "../../contexts/StyleContext";
// import Loading from "../../containers/loading/Loading";
// export default function Projects() {
//   const GithubRepoCard = lazy(() =>
//     import("../../components/githubRepoCard/GithubRepoCard")
//   );
//   const FailedLoading = () => null;
//   const renderLoader = () => <Loading />;
//   const [repo, setrepo] = useState([]);
//   // todo: remove useContex because is not supported
//   const {isDark} = useContext(StyleContext);

//   useEffect(() => {
//     const getRepoData = () => {
//       fetch("/profile.json")
//         .then(result => {
//           if (result.ok) {
//             return result.json();
//           }
//           throw result;
//         })
//         .then(response => {
//           setrepoFunction(response.data.user.pinnedItems.edges);
//         })
//         .catch(function (error) {
//           console.error(
//             `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
//           );
//           setrepoFunction("Error");
//         });
//     };
//     getRepoData();
//   }, []);

//   function setrepoFunction(array) {
//     setrepo(array);
//   }
//   if (
//     !(typeof repo === "string" || repo instanceof String) &&
//     openSource.display
//   ) {
//     return (
//       <Suspense fallback={renderLoader()}>
//         <div className="main" id="opensource">
//           <h1 className="project-title">Open Source Projects</h1>
//           <div className="repo-cards-div-main">
//             {repo.map((v, i) => {
//               if (!v) {
//                 console.error(
//                   `Github Object for repository number : ${i} is undefined`
//                 );
//               }
//               return (
//                 <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
//               );
//             })}
//           </div>
//           <Button
//             text={"More Projects"}
//             className="project-button"
//             href={socialMediaLinks.github}
//             newTab={true}
//           />
//         </div>
//       </Suspense>
//     );
//   } else {
//     return <FailedLoading />;
//   }
// }
import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => (
    <p style={{textAlign: "center", padding: "20px"}}>
      No open source projects found.
    </p>
  );
  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState([]);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const res = await fetch("/profile.json");
        if (!res.ok) throw new Error("Failed to fetch profile.json");
        const json = await res.json();
        const edges = json?.data?.user?.pinnedItems?.edges || [];
        console.log(" Repos fetched:", edges); // Debug
        setRepo(edges);
      } catch (error) {
        console.error(" Fetch error:", error);
        setRepo("Error");
      }
    };
    getRepoData();
  }, []);

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display &&
    repo.length > 0
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v?.node?.id) {
                console.warn(`⚠️ Skipping invalid repo at index ${i}`, v);
                return null;
              }
              return (
                <GithubRepoCard key={v.node.id} repo={v} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
