import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">© Copyright 2015 by <span className="font-medium">Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="mt-3 md:mt-0 text-sm text-gray-600">
          <a href="/transparency-in-coverage" className="mr-4">Transparency in Coverage</a>
          <a href="http://www.goodhiring.com/garberbrosinc/apply/open" target="_blank">Employment Portal</a>
          <a href="#" className="ml-4">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
