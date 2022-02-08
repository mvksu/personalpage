import styled from "styled-components";
export default function Logo() {
  return (
    <StyledLogo>
      <svg
        width="779"
        height="431"
        viewBox="0 0 779 431"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M584 431L387 67.8571L324 21L265 67.8571L453 431H584Z"
          fill="#16D6A8"
        />
        <path
          d="M584 431L387 67.8571L324 21L265 67.8571L453 431H584Z"
          fill="url(#paint0_linear_0_1)"
        />
        <path
          d="M66 311.269L0 431H130L197.5 311.269L260 189.668L327.5 69.0018C342.44 43.7415 356.027 44.0812 389 69.0018C311.4 -55.9671 229 16.9314 197.5 69.0018L130 189.668L66 311.269Z"
          fill="#16D6A8"
        />
        <path
          d="M779 431L582 68.7429L519 22L460 68.7429L648 431H779Z"
          fill="#16D6A8"
        />
        <path
          d="M779 431L582 68.7429L519 22L460 68.7429L648 431H779Z"
          fill="url(#paint1_linear_0_1)"
        />
        <path
          d="M261 311.269L195 431H325L392.5 311.269L455 189.668L522.5 69.0018C537.44 43.7415 551.027 44.0812 584 69.0018C506.4 -55.9671 424 16.9314 392.5 69.0018L325 189.668L261 311.269Z"
          fill="#16D6A8"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="424.5"
            y1="21"
            x2="424.5"
            y2="431"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="#00E76A" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="619.5"
            y1="22"
            x2="619.5"
            y2="431"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="#00E76A" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <h1>Maksymilian</h1>
        <h2>Andrzejczak</h2>
      </div>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 100px;
  }
  div {
    margin: 0 1rem;
  }
  h1, h2 {
    margin: 0rem; 
    color: white;
  }
  h1 {
    font-weight: bold;
  }
  h2 {
    font-weight: normal;
  }

`;
