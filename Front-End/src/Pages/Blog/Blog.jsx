import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog")
  return (
    <div className=" flex flex-col">
      <div className=" mx-20">
        <h1 className=" text-center font-bold text-3xl my-6 bg-orange-400 py-2 rounded-2xl font-serif">
          Frequently asked Question
        </h1>
        <main className=" text-zinc-900">
          {/* <!-- Q1  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold ">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="lg:pl-8 pt-2 text-lg">
              <b>Access token and Refresh token</b> A refresh token just helps
              you re-validate a user without them having to re-enter their login
              credentials multiple times. The access token is re-issued,
              provided the refresh token is a valid one requesting permission to
              access confidential resources.
            </p>
            <p className="lg:pl-8 pt-2 text-lg">
              How does access token and refresh token work? Normally, a user
              with an access token can only access protected resources or
              perform specific actions for a set period of time, which reduces
              the risk of the token being compromised. A refresh token allows
              the user to get a new access token without needing to log in
              again.
            </p>
            <p className="lg:pl-8 pt-2 text-lg">
              You can store the access token and refresh token in the
              server-side session. The application can use web sessions to
              communicate with the server. The token is then available for any
              requests originating from server-side code.
            </p>
          </div>
          {/* <!-- Q-2  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              2. Compare SQL and NoSQL databases?
            </h1>
            <p className="lg:pl-6 pt-2 text-lg">
              <h2 className=" text-lg font-bold py-3">Data Model</h2>
              <ul className=" list-disc ml-8">
                <li>SQL: Rigid schema with tables and relationships</li>
                <li>
                  NoSQL: Flexible schema with documents, key-value pairs, or
                  graphs
                </li>
              </ul>

              <h2 className=" text-lg font-bold py-3"> Scalability</h2>
              <ul className=" list-disc ml-8">
                <li>SQL: Vertical scaling by increasing hardware resources</li>
                <li>NoSQL: Horizontal scaling by adding more servers</li>
              </ul>

              <h2 className=" text-lg font-bold py-3">
                Data Integrity and Transactions
              </h2>
              <ul className=" list-disc ml-8">
                <li>SQL: Strong data integrity and ACID properties</li>
                <li>
                  NoSQL: Sacrifices strict consistency for scalability and
                  performance
                </li>
              </ul>

              <h2 className=" text-lg font-bold py-3">Query Language</h2>
              <ul className=" list-disc ml-8">
                <li>
                  SQL: Uses SQL language for querying and manipulating data
                </li>
                <li>NoSQL: Custom query languages or APIs</li>
              </ul>

              <h2 className=" text-lg font-bold py-3">Use Cases</h2>
              <ul className=" list-disc ml-8">
                <li>
                  SQL: Complex queries, structured data, strict consistency
                </li>
                <li>
                  NoSQL: Unstructured/semi-structured data, real-time data,
                  flexibility
                </li>
              </ul>
            </p>
          </div>
          {/* <!-- Q-3  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              3. What is express js? What is Nest JS?
            </h1>
            <p className="lg:pl-6 pt-2 text-lg">
              Express is a minimalist and flexible framework that is easy to use
              and has a large community of developers. NestJS, on the other
              hand, is a newer framework that provides additional features such
              as dependency injection, a modular architecture, and an intuitive
              CLI.
            </p>
          </div>
          {/* <!-- Q-4  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              4. What is MongoDB aggregate and how does it work?
            </h1>
            <p className="lg:pl-6 pt-2 text-lg">
              Aggregation is a way of processing a large number of documents in
              a collection by means of passing them through different stages.
              The stages make up what is known as a pipeline. The stages in a
              pipeline can filter, sort, group, reshape and modify documents
              that pass through the pipeline.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
