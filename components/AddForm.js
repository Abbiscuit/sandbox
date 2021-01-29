export default function AddForm({ toggle, setToggle }) {
  return (
    <div className="mt-4">
      <form className="w-full bg-white p-8 rounded-md shadow-sm">
        <label htmlFor="siteName">Name</label>
        <input
          className="w-full border rounded-sm px-4 py-2 mb-4"
          type="text"
          placeholder="My Site"
          name="siteName"
        />

        <label htmlFor="link">Link</label>
        <input
          className="w-full border rounded-sm px-4 py-2 mb-4"
          type="link"
          placeholder="https://website.com"
          name="link"
        />

        <div className="w-full flex justify-end">
          <button
            className="px-4 py-2 bg-gray-100 rounded-md"
            onClick={() => setToggle(false)}
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md ml-4"
            onClick={() => console.log(`CLicked`)}
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
