import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  if (post) {
    const disqusShortname = "hashigoc";
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
  }
  return null;
};
export default DisqusComments;
