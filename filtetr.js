HandelDelteByone(state, action) {
  state.Basekt = state.Basekt.filter((item) => item.nameCards !== action.payload.nameCards);
}
   way to fillter its so good
