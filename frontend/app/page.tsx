"use client";
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

function MainCard() {
  return (
    <Box
      sx={{
        width: 500,
        height: 500,
        position: "relative",
      }}
    >
      <Card sx={{ borderRadius: 5, my: 1, position: "absolute", left: 100, top: '40%' }}>
        <Image
          src="/images/fresh-2.jpeg"
          width={200}
          height={300}
          alt="fresh markets photo"
        />
      </Card>

      <Card
        sx={{
          borderRadius: 5,
          my: 6.8,
          backgroundColor: "var(--primary-bg-color)",
          position: "absolute",
          left: "40%",
          top: '-10%',
        }}
      >
        <Image
          src="/images/fresh-1.jpeg"
          width={200}
          height={300}
          alt="fresh markets photo"
        />
      </Card>
      <Card
        sx={{
          borderRadius: 5,
          my: 7.05,
          height: "fix-content",
          position: "absolute",
          right:0,
          top: '30%'
        }}
      >
        <Image
          src="/images/fresh_market.jpg"
          width={200}
          height={300}
          alt="fresh markets photo"
        />
      </Card>
    </Box>
  );
}

export default function Home() {
  const text = "Find Global Fresh Markets Here";
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "var(--primary-bg-color)",
        p: 10,
        borderRadius: 1,
      }}
    >
      <Box
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          boxShadow: 5,
          borderRadius: 5,
        }}
        fontSize="60px"
        textAlign="center"
        maxWidth="sm"
        color="var(--text-color-100)"
      >
        {text}
      </Box>

      <MainCard />
    </Box>
  );
}
