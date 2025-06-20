export default {
  async fetch(request, env, ctx) {
    return new Response("Halo dari kucingmail.my.id API!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
