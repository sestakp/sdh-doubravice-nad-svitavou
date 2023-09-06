 const extractFileName = (url) => {
    const regex = /images%2F(.*?)\?/;
    const match = url.match(regex);

    if (match && match[1]) {

      const lastUnderscoreIndex = match[1].lastIndexOf('_');
  
      if (lastUnderscoreIndex !== -1) {
        return match[1].slice(0, lastUnderscoreIndex);
      }

    }

    return '';
  };

  export default extractFileName;