import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  const [cartItems, setCartItem] = useState(["Product 1", "Product 2"]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Mustafa",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    // <>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
    //   )}
    //   <Button
    //     className={"btn btn-primary"}
    //     onClick={() => setAlertVisible(true)}
    //   >
    //     My Button
    //   </Button>
    //   <Like />
    // </>

    <>
      <NavBar cartItemCount={cartItems.length} />
      <Cart cartItem={cartItems} onClear={() => setCartItem([])} />
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        doloremque minima deserunt a voluptates alias harum omnis maiores fugiat
        nihil ratione expedita odio obcaecati reprehenderit, sequi nam illum
        laborum corrupti quibusdam ad ipsum veritatis possimus tempore earum!
        Neque quibusdam vitae voluptatibus nemo, libero nesciunt doloremque
        labore sint numquam porro deserunt eius tenetur dolore consequatur error
        id fugiat ad esse velit. Maiores, deserunt cupiditate? Inventore enim
        provident quis labore voluptatibus. Sed quia reprehenderit ipsam in
        delectus praesentium, obcaecati ullam necessitatibus voluptatibus neque
        ea! Quae magni veritatis, dignissimos, harum modi mollitia vel earum ut
        quas laboriosam dicta eligendi nemo dolore ipsam! Recusandae.
      </ExpandableText>
    </>
  );
};

export default App;
