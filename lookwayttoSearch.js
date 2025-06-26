  const updated = cardsUsers.map((item) => item.nameCards === data.nameCards? { ...item, check: true } : item
  );
