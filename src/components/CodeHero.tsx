import { Text } from "@chakra-ui/react";

export default function CodeHero() {
  return (
    <Text textShadow="49px 41px 0px rgba(0, 0, 0, 0.25)" color="gray.200">
      <code
        style={{
          color: "#E7CA60",
        }}
      >
        import
      </code>
      <code>{` {`}</code>
      <code
        style={{
          color: "#FE7389",
        }}
      >{` useState `}</code>
      <code>{`} `}</code>
      <code
        style={{
          color: "#E7CA60",
        }}
      >{`from `}</code>
      <code
        style={{
          color: "#3BE582",
        }}
      >{`"react"`}</code>
      <code>{`;`}</code>

      <br />
      <br />
      <code
        style={{
          color: "#E7CA60",
        }}
      >
        {`
          export default
          `}
      </code>
      <code
        style={{
          color: "#22E6D6",
        }}
      >{`function `}</code>
      <code
        style={{
          color: "#64BAF3",
        }}
      >{`personalInfo`}</code>
      <code>{`() {`}</code>

      <br />
      <code
        style={{
          marginLeft: "2.5rem",
          color: "#22E6D6",
        }}
      >{`
        const
        `}</code>
      <code>[</code>
      <code
        style={{
          color: "#FE7389",
        }}
      >
        currentRole
      </code>
      <code>, </code>
      <code
        style={{
          color: "#64BAF3",
        }}
      >
        setCurrentRole
      </code>
      <code>] = </code>
      <code
        style={{
          color: "#64BAF3",
        }}
      >
        useState
      </code>
      <code>(</code>
      <code style={{ color: "#3BE582" }}>"freelancer"</code>
      <code>);</code>
      <br />
      <br />
      <code
        style={{
          marginLeft: "2.5rem",
          color: "#22E6D6",
        }}
      >{`
        const 
        `}</code>
      <code
        style={{
          color: "#FE7389",
        }}
      >
        personalInfo
      </code>
      <code>{` = {`}</code>
      <br />
      <code
        style={{
          marginLeft: "5rem",
        }}
      >
        {`
          name: 
          `}
      </code>
      <code
        style={{
          color: "#3BE582",
        }}
      >
        "Pedro Correia"
      </code>
      <code>,</code>
      <br />
      <code
        style={{
          marginLeft: "5rem",
        }}
      >
        {`
          locale: 
          `}
      </code>
      <code
        style={{
          color: "#3BE582",
        }}
      >
        "Maceió-AL, Brazil"
      </code>
      <code>,</code>
      <br />
      <code
        style={{
          marginLeft: "5rem",
        }}
      >
        {`
          age: 
          `}
      </code>
      <code style={{ color: "#3BE582" }}>25</code>
      <code>,</code>
      <br />
      <code
        style={{
          marginLeft: "5rem",
        }}
      >
        {`occupation: [`}
      </code>
      <code
        style={{
          color: "#3BE582",
        }}
      >
        {`"full-stack developer", "entrepreneur", "visual artist", "photographer", "journalist"`}
      </code>
      <code>]</code>
      <br />
      <code
        style={{
          marginLeft: "2.5rem",
        }}
      >
        {`
          };
          `}
      </code>
      <br />
      <code>{`}`}</code>
    </Text>
  );
}
