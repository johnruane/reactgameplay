const Bomb = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 100 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <rect
          id='Bomb With Burning Wick'
          width='100%'
          height='100%'
          fill='url(#pattern1)'
        />
        <defs>
          <pattern
            id='pattern1'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use xlinkHref='#image0_956_342' transform='scale(0.01)' />
          </pattern>
          <image
            id='image0_956_342'
            width='100%'
            height='100%'
            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYUlEQVR4nO3dWchVRRwA8GnPwvaH1oeKNihbqB5aaLFoz4igBekhWkyiaIEg6yFCMyIyzFJ6yIIWjSgIoihbRbONtIV8qR4qRMkKKsXUXwxM9HW5n333+uWdOWd+j/eeZc7MuXNn5sz8TwhVVVVVVVVVVVVVVVVVVVVVfnAp5uJxjB/y+Xa4Cc9gBo4YbEpbAA/4t42Yhj2xpOO733HKoNPcWDgIG3S3apjPPxx0uouEXXEyLsQ52LnLNpfp3frBXFGBMC5VN1+lqqfzjj+jY/sT+yiQbwd3hYXAWXhzBJn5E8YO2W8rLOixQCYN9mozhsPxao8ZOqHjGHvg0xHu++DgrjZj2BZ3Y53eXdxxrFogmwMHY7H+dKuy3unxGJM36wKaBOdhdZ+FsRKndxwvtsJ69f3gcuCfhB+Q/jgn4348iicxD3NS52oKJuIYbN/DsQ/Bvak3/HA8T5dt4p181yb6DN0sx8z4J4yzMabLca/so0A2hi0N++MGPI8VfSR6HZamgjoV2wxznlvxZ5f9X/q73xD3xRM9nPt1nNZDo6CzefxfHcOlo53fwyVuDK7GGz3eiSOtu+Ov6rAh57vnP/aJdfteeHlEZ+Dr2AHs47of6XKs6Wno5KOOz9fgzFHP/I4EjcWdff4SehXvxtcwa4Tb/zbCY87oViX1kAeX41k8Ff+nOm7S2/FCSvORo5bxXRKxNW5Md2+pVuP8UDoc2+XnWJplsQkcSofrsVbZ3oqDh6FksdWCF5VvHnYIJcPuWKgZ3h/a2y4O9sGXmmVBfLwaSoPdUgetiW4LJcGOeFdzLQslwWzNtiaUAldovh9CCdLA4K+ab04oQRp3abpV8cYLuUvTXZru5zhbJOQuPcQZ6cP6Uv1SRGFEcdRT862MzflQArynHSaG3OFQ7fFxyB2mapdxIWdxvql2mRJyFScOaJ9FIVdp3lHbrI8zUkKO8Jx2OjfkCF9opztCbtJUnjh5q43mhtzgQO21OOSmzyVZTbE85CbOM9VeK0Ju4vIs7bU25KYWSGZaXmWtCrnBCdrrm5Cbljd7l4TctLxj+HTIET7XTlNCjtJSrDa6JOQorZZtmw1xUWbIUcuep5fxXD02AbXLtJAz3Kddjgo5S+EphotI0DSfhBI0fHFOedF44jNmzbdicyI2bHENCAZQ3nP0TUkhlJrqO+wUSpNCKjXRhFAi7JvWUTTJK6FkfQYIzvmPfO9QOjymGWNW40MTxAAteFvZbg5Ngl0KXnc4NTRRrH8LnP87Ky5iDU2VwjPFsEYlmB7aIHaqMF++1uCa0DYpFOwf8rI8BmAObYWj8UEmK6FmFh0hbpSnEF23iQjO/7dFOG7Q+ZBrcMxbYpD5LVQQC3FRo1tRoxiBbmKKPB2rktEOeDwbJw36OkseoLw2vbHgxz4KYCM+S287uKD4sK65wX5ppv2k9NKtmel1FfPT6yoeSq+cuArHxxGCQae5qqqqqqqqqqqqqqqqqqoq5OYv/+hTu0ljUvkAAAAASUVORK5CYII='
          />
        </defs>
      </svg>
    </div>
  );
};

export default Bomb;
