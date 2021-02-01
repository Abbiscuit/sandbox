import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useAuth } from '../../lib/auth';
import { getAllFeedback, getAllSites } from '../../lib/db-admin';
import { parseISO, format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import { createFeedback, createUser } from '../../lib/db';
import firebase from '../../lib/firebase';

export default function SiteFeedback({ initialFeedback }) {
  const router = useRouter();
  const { siteId } = router.query;
  const { user } = useAuth();
  const { register, reset, handleSubmit } = useForm();
  const [allFeedback, setAllFeedback] = useState([]);

  useEffect(() => {
    setAllFeedback(initialFeedback);
  }, [initialFeedback]);

  const onSubmit = async data => {
    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      siteId,
      text: data.comment,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: 'pending',
      rating: 3,
    };

    setAllFeedback(currentFeedback => [newFeedback, ...currentFeedback]);
    await createFeedback(newFeedback);

    reset();
  };

  return (
    <Layout subTitle="" title="Feedback">
      {user && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-end mb-4"
        >
          <div className="flex flex-col w-1/4">
            <label className="text-sm text-gray-600" htmlFor="comment">
              Comment
            </label>
            <input
              className="p-2"
              type="text"
              id="comment"
              name="comment"
              placeholder="Leave a comment"
              ref={register}
            />
          </div>
          <button className="p-2 text-gray-900 px-4" type="submit">
            Add comment
          </button>
        </form>
      )}

      {allFeedback &&
        allFeedback.map(feedback => (
          <div key={feedback.id || new Date().getTime().toString()}>
            <div>
              <h3 className={`text-gray-900 text-sm font-medium`}>
                {feedback.author}
              </h3>
              <p className="text-gray-600 text-xs mb-2">
                {format(parseISO(feedback.createdAt), 'PPpp')}
              </p>
              <p className="text-gray-900 text-base">{feedback.text}</p>
            </div>

            <div
              style={{ height: 1 }}
              className="border-gray-400 bg-white mt-8 mb-8 w-full"
            ></div>
          </div>
        ))}
    </Layout>
  );
}

export const getStaticProps = async context => {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const { sites } = await getAllSites();

  const paths = sites.map(site => {
    return {
      params: {
        siteId: site.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
