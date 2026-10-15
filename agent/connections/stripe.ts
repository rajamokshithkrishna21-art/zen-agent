import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.stripe.com",
  description: "Manage payments and financial workflows.",
  auth: connect("mcp.stripe.com/prj_y3iJnnMNSX43QeFzhbqSKUW0Z953"),
});
