import { NextResponse } from "next/server";

const blogData = [
    {
        id: 1,
        title: "Premium Black Leather Jacket",
        slug: "premium-black-leather-jacket",
        category: "Fashion",
        description: "Embrace timeless style and durability with our premium black leather jacket, designed for every occasion.",
        image: "/images/blk.png",
        content: "Step up your fashion game with our premium black leather jacket, a must-have in every modern wardrobe. Made with high-quality leather, this jacket offers both style and durability, making it the perfect addition to your winter and fall outfits.\n\nThe sleek design and tailored fit provide a flattering silhouette, while the soft inner lining ensures comfort throughout the day. Whether you are dressing up for a night out or going for a casual look, this versatile jacket pairs effortlessly with jeans, chinos, or even dresses.\n\nThis jacket features functional zippers and pockets, adding to its edgy and practical design. The classic black color and bold finish make it a statement piece, suitable for any occasion, from a casual outing to a stylish evening event.\n\nElevate your outerwear collection with this black leather jacket, designed for fashion-forward individuals who appreciate both quality and style."
      },
  {
    id: 2,
    title: "Best Electronics",
    slug: "best-electronics",
    category: "Laptop",
    description: "Explore the ultimate range of laptops, combining sleek designs with cutting-edge technology.",
    image: "/images/lp.png",
    content: "Discover the ultimate collection of high-performance laptops designed to meet all your needs. From sleek and lightweight ultrabooks to powerful gaming machines, our laptops combine cutting-edge technology with stunning designs. Perfect for work, study, or entertainment, they offer exceptional speed, vibrant displays, and long-lasting battery life.\n\nStay ahead of the curve with the latest processors, ample storage, and advanced cooling systems to handle heavy multitasking and demanding applications effortlessly. Explore a variety of sizes, from compact 13-inch laptops to expansive 17-inch screens for immersive viewing.\n\nWhether you need a laptop for graphic design, coding, gaming, or casual browsing, we have the perfect match for you. Our collection also includes accessories like ergonomic keyboards, wireless mice, and portable chargers to enhance your experience. Upgrade to the best in electronics and redefine productivity and entertainment."
  },
  {
    id: 3,
    title: "Modern Wooden Computer Table",
    slug: "wooden-computer-table",
    category: "Furniture",
    description: "Upgrade your workspace with our modern wooden computer table, blending style and functionality.",
    image: "/images/wood.png",
    content: "Transform your workspace with our elegant wooden computer table, designed to combine style and efficiency. Made from high-quality, durable wood, this table features a smooth finish and robust build, ensuring long-lasting performance.\n\nThe spacious tabletop provides ample room for your computer, accessories, and other essentials, keeping your workspace organized. Equipped with smart storage solutions, including drawers and shelves, it offers a perfect balance of aesthetics and utility.\n\nThis table is ergonomic design ensures comfort during long hours of work or study, making it an ideal choice for both home and office use. The natural wooden finish adds a touch of sophistication and blends seamlessly with any interior decor.\n\nUpgrade your productivity and enhance your environment with this beautifully crafted piece of furniture. Whether you're working from home or setting up a study area, this wooden table is designed to meet all your needs."
  },
  
  {
    id: 4,
    title: "Red PlayStation Remote",
    slug: "red-playstation-remote",
    category: "Gaming Accessories",
    description: "Elevate your gaming experience with the stylish and ergonomic red PlayStation remote.",
    image: "/images/red.png",
    content: "Dive into immersive gaming with our sleek red PlayStation remote, designed for both style and performance. This wireless controller features a striking red finish that adds a bold touch to your gaming setup.\n\nEnjoy precise control with responsive buttons, ergonomic grips, and a lightweight design, ensuring comfort during long gaming sessions. The remote is equipped with advanced haptic feedback for a more immersive gaming experience.\n\nWith a long-lasting rechargeable battery, you can game uninterrupted for hours. The remote seamlessly connects to your PlayStation console, delivering low-latency performance and reliable connectivity.\n\nWhether you're battling it out in competitive games or exploring open-world adventures, this red PlayStation remote is the perfect accessory for gamers who demand both functionality and flair. Upgrade your gaming arsenal today with this must-have controller!"
  },
  
  {
    id: 5,
    title: "Classic Black PlayStation Remote",
    slug: "black-playstation-remote",
    category: "Gaming Accessories",
    description: "Experience seamless gaming with our sleek and durable black PlayStation remote.",
    image: "/images/blkk.png",
    content: "Take control of your gaming adventures with the classic black PlayStation remote, designed for precision and comfort. The remote's minimalist black design complements any gaming setup, offering both style and functionality.\n\nEquipped with responsive buttons and ergonomic grips, this controller ensures smooth gameplay even during intense sessions. Its lightweight build and balanced design provide hours of comfortable use without strain.\n\nEnjoy advanced features like haptic feedback for a more immersive experience and a rechargeable battery for uninterrupted gaming. The remote delivers quick and stable connectivity to your PlayStation console, ensuring no input lag.\n\nWhether you're conquering epic battles, racing against the clock, or exploring expansive worlds, the black PlayStation remote is your perfect gaming partner. Upgrade your setup with this reliable and stylish controller today!"
  },
  
  {
    id: 6,
    title: "Elegant Ladies Handbag",
    slug: "elegant-ladies-handbag",
    category: "Fashion Accessories",
    description: "Elevate your look with our chic and versatile ladies handbag, perfect for any occasion.",
    image: "/images/bg.png",
    content: "Discover our stunning collection of ladies handbags, crafted to blend elegance with functionality. This sophisticated handbag features a timeless design that pairs effortlessly with both casual and formal outfits.\n\nMade with premium materials, the bag offers durability while maintaining a luxurious feel. Its spacious interior includes multiple compartments to keep your essentials organized, whether you're heading to work, a brunch, or an evening event.\n\nThe adjustable straps and sturdy handles provide comfortable carrying options, while the polished hardware adds a touch of glamour. Available in versatile colors, this handbag complements a variety of styles and personal preferences.\n\nWhether you're carrying your makeup, wallet, or daily necessities, this elegant ladies handbag ensures you do so in style. A must-have accessory for modern women looking to make a statement wherever they go!"
  },
  
  {
    id: 7,
    title: "Premium Pink Leather Jacket",
    slug: "premium-Pink-leather-jacket",
    category: "Fashion",
    description: "Embrace timeless style and durability with our premium black leather jacket, designed for every occasion.",
    image: "/images/pnk.png",
    content: "Step up your fashion game with our premium Pink leather jacket, a must-have in every modern wardrobe. Made with high-quality leather, this jacket offers both style and durability, making it the perfect addition to your winter and fall outfits.\n\nThe sleek design and tailored fit provide a flattering silhouette, while the soft inner lining ensures comfort throughout the day. Whether youre dressing up for a night out or going for a casual look, this versatile jacket pairs effortlessly with jeans, chinos, or even dresses.\n\nThis jacket features functional zippers and pockets, adding to its edgy and practical design. The classic black color and bold finish make it a statement piece, suitable for any occasion, from a casual outing to a stylish evening event.\n\nElevate your outerwear collection with this black leather jacket, designed for fashion-forward individuals who appreciate both quality and style."
  },
  
  {
    id: 8,
    title: "Smartphones with Stunning LCD Displays",
    slug: "smartphones-lcd-displays",
    category: "Electronics",
    description: "Explore smartphones with stunning LCD displays that bring your content to life, available for every budget.",
    image: "/images/lcd.png",
    content: "Discover a wide range of smartphones equipped with high-quality LCD displays, perfect for vibrant visuals and smooth touch interactions. From budget-friendly models to high-end devices, our collection offers options for every user.\n\nWhether you're streaming your favorite shows, playing games, or browsing the web, the LCD displays deliver bright, crisp, and accurate colors. Choose from top brands with the latest features, including excellent camera quality, fast performance, and long battery life.\n\nFind smartphones that offer great value without compromising on essential features like display clarity, processing power, and overall functionality. Whether you want a device for everyday use or something with more advanced specifications, we have the perfect smartphone for you.\n\nGet the best deals on smartphones with stunning LCD displays, designed to enhance your mobile experience at any budget."
  },
  
  {
    id: 9,
    title: "Mechanical Keyboards for Gamers",
    slug: "mechanical-keyboards",
    category: "Electronics",
    description: "Discover the latest mechanical keyboards designed for gamers, with precision and durability.",
    image: "/images/keey.png",
    content: "Elevate your gaming setup with our collection of high-quality mechanical keyboards. Built for precision, speed, and durability, these keyboards are perfect for gamers who demand the best performance.\n\nFrom RGB lighting and customizable keys to responsive switches and ergonomic designs, our mechanical keyboards offer a variety of features tailored for gaming enthusiasts. Choose from top brands like Corsair, Razer, and Logitech, and experience enhanced gaming sessions with every keystroke.\n\nWhether youre gaming, typing, or coding, these keyboards deliver a satisfying tactile feel and unmatched durability. Explore our range of mechanical keyboards and find the perfect fit for your gaming setup.\n\nGet the best deals on gaming mechanical keyboards that combine performance, style, and comfort, designed to give you an edge in every game."
  },
  
  {
    id: 10,
    title: "Latest iPhone Collection",
    slug: "latest-iphone",
    category: "Electronics",
    description: "Explore the newest iPhone models with advanced features and sleek designs.",
    image: "/images/mbl.png",
    content: "Stay ahead with the latest iPhone models featuring cutting-edge technology, high-performance processors, and stunning cameras.\n\nWhether you re after the sleek iPhone 15 Pro or the more budget-friendly iPhone 15, you  ll find the perfect phone to match your needs. With top-tier displays, longer battery life, and enhanced processing power, these iPhones are designed to deliver exceptional performance for everyday use and gaming.\n\nGet ready to experience improved features such as 5G connectivity, enhanced photography capabilities, and more storage options.\n\nBrowse our selection to find the perfect iPhone for your lifestyle, whether you need it for work, photography, or entertainment."
  },
  
  {
    id: 11,
    title: "Portable Music Speakers",
    slug: "portable-music-speakers",
    category: "Electronics",
    description: "Enjoy high-quality sound on the go with the best portable music speakers.",
    image: "/images/music.png",
    content: "Experience immersive sound wherever you go with our range of portable music speakers.\n\nThese compact and powerful speakers are perfect for outdoor activities, parties, or just relaxing at home. With Bluetooth connectivity, water resistance, and long battery life, you can enjoy your favorite music anytime, anywhere. From bass-heavy sound systems to clear and crisp audio, we offer a variety of options to suit your preferences.\n\nFind top-rated brands that combine portability with premium sound quality. Whether you re looking for a speaker for a small gathering or for personal use, discover the ideal portable speaker for your music needs.\n\nBrowse our collection and take your music experience to the next level!"
  },
  
  {
    id: 12,
    title: "Wooden Book Rack Collection",
    slug: "wooden-book-rack",
    category: "Furniture",
    description: "Organize your space with our beautifully crafted wooden book racks.",
    image: "/images/wood.png",
    content: "Discover a range of beautifully crafted wooden book racks that bring both functionality and style to your home.\n\nOur wooden book racks are designed to hold your books while adding an elegant touch to any room. With multiple sizes and designs to choose from, you can find the perfect book rack for your space, whether it's for your living room, office, or bedroom. Made from high-quality wood, these racks are durable and sturdy, capable of holding books, decor, and other items.\n\nThese racks not only provide a practical solution for organizing your books but also act as a statement piece in your home decor. From sleek modern designs to rustic and vintage styles, our wooden book racks will complement your home s aesthetic.\n\nExplore our collection and organize your books in style with a wooden book rack that suits your needs and preferences."
  },
  

];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (slug) {
    // Find the specific blog by slug
    const blog = blogData.find((item) => item.slug === slug);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  }

  // If no slug is provided, return all blog data
  return NextResponse.json(blogData);
}





