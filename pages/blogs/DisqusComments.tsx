import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  const disqusShortname = "hashi-goc-blog-comments";
  const disqusConfig = {
    url: `https://www.hashigoc.com/blogs/${post.slug}/`,
    identifier: post.slug,
    title: post.blog_title,
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
