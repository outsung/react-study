import React, { useCallback, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorElement } from "../components/common";
import { main } from "../screens";

export function Router() {
  const [postList, setPostList] = useState([]);

  const addPost = useCallback((post) => {
    setPostList((prev) => [...prev, { id: prev.length + 1, ...post }]);
  }, []);

  const getPostById = useCallback(
    (id) => {
      return postList.find((post) => post.id === id) || null;
    },
    [postList]
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <main.MainScreen />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "",
          element: <main.home.HomeScreen />,
        },
        {
          path: "home",
          element: <main.home.HomeScreen />,
        },
        {
          path: "post",
          element: <main.post.PostListScreen postList={postList} />,
        },
        {
          path: "post/write",
          element: <main.post.PostWriteScreen addPost={addPost} />,
        },
        {
          path: "post/:id",
          element: <main.post.PostViewScreen getPostById={getPostById} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
