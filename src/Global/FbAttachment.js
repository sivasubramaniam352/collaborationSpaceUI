const postSent = async () => {
  try {
    if (fileUrl) {
      navigate("loadingProcress", {
        nav: "home",
        icon: "paper-plane",
      });
      const { uri, fileName } = image;
      const response = await fetch(uri);
      const blob = await response.blob();
      const imageExtension = fileName.split(".")[
        fileName.split(".").length - 1
      ];
      const imageFileName = `${Math.round(
        Math.random() * Math.random() * 100000000000
      )}.${imageExtension}`;
      const uploadImage = storage.ref(`post/${imageFileName}`).put(blob);
      uploadImage.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref(`post/${imageFileName}`)
            .getDownloadURL()
            .then(async (url) => {
              let response;
              let postBody = { ...postContent, url: url, mediaType: "image" };
              try {
                response = await API.createPost(token, postBody);
                if (response.data.success === true) {
                  setImage("");
                  setLink(false);
                  setSave(false);
                  setPublicPost(false);
                  setPostContent("");
                  setfileUrl(false);
                }
              } catch (error) {
                console.log(error.message);
              }
            });
        }
      );
    } else {
      let response;
      try {
        response = await API.createPost(token, postContent);
        navigate("loadingProcress", {
          nav: "home",
          icon: "paper-plane",
        });
        if (response.data.success === true) {
          setImage("");
          setLink(false);
          setSave(false);
          setPublicPost(false);
          setPostContent("");
          setfileUrl(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
