const Snake = ({ className }) => {
  return (
    <svg
      width='200'
      height='40'
      viewBox='0 0 244 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12 0.499999C5.64873 0.5 0.5 5.64873 0.5 12L0.500001 28C0.500001 34.3513 5.64873 39.5 12 39.5L232 39.5C238.351 39.5 243.5 34.3513 243.5 28L243.5 12C243.5 5.64872 238.351 0.499988 232 0.499988L12 0.499999Z'
        fill='#1E342C'
        stroke='white'
      />
      <path
        d='M100.488 25.192C99.848 25.192 99.24 25.128 98.664 25C98.088 24.872 97.576 24.6693 97.128 24.392C96.6907 24.104 96.344 23.7467 96.088 23.32C95.8427 22.8827 95.72 22.3547 95.72 21.736C95.72 21.6827 95.72 21.6293 95.72 21.576C95.72 21.512 95.7253 21.464 95.736 21.432H98.104C98.0933 21.464 98.088 21.5067 98.088 21.56C98.088 21.6133 98.088 21.6613 98.088 21.704C98.088 22.0453 98.1787 22.3333 98.36 22.568C98.552 22.8027 98.8293 22.9787 99.192 23.096C99.5547 23.2133 99.976 23.272 100.456 23.272C100.765 23.272 101.037 23.256 101.272 23.224C101.517 23.1813 101.731 23.128 101.912 23.064C102.104 22.9893 102.259 22.904 102.376 22.808C102.504 22.712 102.595 22.6 102.648 22.472C102.712 22.344 102.744 22.2 102.744 22.04C102.744 21.752 102.648 21.5173 102.456 21.336C102.275 21.1547 102.019 21 101.688 20.872C101.368 20.744 101.005 20.6267 100.6 20.52C100.195 20.4133 99.7787 20.3067 99.352 20.2C98.9253 20.0827 98.5093 19.944 98.104 19.784C97.6987 19.6133 97.336 19.4107 97.016 19.176C96.696 18.9413 96.44 18.6427 96.248 18.28C96.056 17.9173 95.96 17.48 95.96 16.968C95.96 16.424 96.072 15.9547 96.296 15.56C96.5307 15.1653 96.856 14.84 97.272 14.584C97.688 14.328 98.168 14.1413 98.712 14.024C99.256 13.896 99.848 13.832 100.488 13.832C101.085 13.832 101.651 13.896 102.184 14.024C102.717 14.1413 103.187 14.3333 103.592 14.6C103.997 14.8667 104.312 15.2027 104.536 15.608C104.771 16.0133 104.888 16.4933 104.888 17.048V17.24H102.568V17.112C102.568 16.824 102.483 16.5787 102.312 16.376C102.141 16.1733 101.901 16.0133 101.592 15.896C101.283 15.7787 100.92 15.72 100.504 15.72C100.056 15.72 99.672 15.7627 99.352 15.848C99.0427 15.9333 98.8027 16.0613 98.632 16.232C98.472 16.392 98.392 16.584 98.392 16.808C98.392 17.064 98.4827 17.2773 98.664 17.448C98.856 17.608 99.112 17.752 99.432 17.88C99.7627 17.9973 100.131 18.104 100.536 18.2C100.941 18.296 101.357 18.4027 101.784 18.52C102.211 18.6373 102.627 18.776 103.032 18.936C103.437 19.096 103.8 19.2987 104.12 19.544C104.44 19.7787 104.696 20.072 104.888 20.424C105.08 20.776 105.176 21.1973 105.176 21.688C105.176 22.5307 104.973 23.208 104.568 23.72C104.163 24.232 103.608 24.6053 102.904 24.84C102.2 25.0747 101.395 25.192 100.488 25.192ZM107.075 25V14.024H112.787C113.577 14.024 114.233 14.1733 114.755 14.472C115.289 14.76 115.689 15.1707 115.955 15.704C116.233 16.2267 116.371 16.8507 116.371 17.576C116.371 18.3013 116.227 18.936 115.939 19.48C115.662 20.0133 115.251 20.4293 114.707 20.728C114.163 21.0267 113.497 21.176 112.707 21.176H109.459V25H107.075ZM109.459 19.224H112.387C112.889 19.224 113.273 19.08 113.539 18.792C113.817 18.504 113.955 18.104 113.955 17.592C113.955 17.24 113.897 16.9467 113.779 16.712C113.662 16.4773 113.486 16.296 113.251 16.168C113.027 16.04 112.739 15.976 112.387 15.976H109.459V19.224ZM116.049 25L120.273 14.024H123.217L127.441 25H124.865L124.081 22.84H119.297L118.513 25H116.049ZM119.985 20.92H123.393L122.417 18.216C122.374 18.0987 122.321 17.96 122.257 17.8C122.204 17.6293 122.145 17.4427 122.081 17.24C122.017 17.0373 121.953 16.84 121.889 16.648C121.836 16.4453 121.782 16.264 121.729 16.104H121.633C121.58 16.3067 121.51 16.5467 121.425 16.824C121.34 17.0907 121.254 17.352 121.169 17.608C121.084 17.8533 121.014 18.056 120.961 18.216L119.985 20.92ZM133.409 25.192C132.268 25.192 131.292 24.9947 130.481 24.6C129.671 24.1947 129.052 23.5707 128.625 22.728C128.209 21.8853 128.001 20.8133 128.001 19.512C128.001 17.592 128.471 16.168 129.409 15.24C130.359 14.3013 131.692 13.832 133.409 13.832C134.348 13.832 135.191 13.992 135.937 14.312C136.684 14.632 137.271 15.112 137.697 15.752C138.135 16.392 138.353 17.1973 138.353 18.168H135.953C135.953 17.656 135.847 17.224 135.633 16.872C135.431 16.52 135.137 16.2533 134.753 16.072C134.38 15.88 133.943 15.784 133.441 15.784C132.759 15.784 132.193 15.9173 131.745 16.184C131.308 16.4507 130.983 16.8453 130.769 17.368C130.567 17.88 130.465 18.5093 130.465 19.256V19.752C130.465 20.52 130.572 21.1653 130.785 21.688C130.999 22.2 131.319 22.5893 131.745 22.856C132.183 23.112 132.743 23.24 133.425 23.24C133.959 23.24 134.423 23.1493 134.817 22.968C135.212 22.7867 135.516 22.52 135.729 22.168C135.943 21.816 136.049 21.384 136.049 20.872H138.353C138.353 21.8427 138.14 22.648 137.713 23.288C137.297 23.928 136.716 24.408 135.969 24.728C135.223 25.0373 134.369 25.192 133.409 25.192ZM140.232 25V14.024H149V15.976H142.632V18.424H148.264V20.36H142.632V23.032H149.096V25H140.232Z'
        fill='white'
      />
    </svg>
  );
};

export default Snake;