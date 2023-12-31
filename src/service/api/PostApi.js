import HttpClient from '/service/HttpClient';

export default {
  async createPost({ content, userId, token }) {
    const { data } = await HttpClient.post(
      '/api/post',
      {
        content,
        ownerId: userId,
      },
      { headers: { token: `${token}/${userId}` } }
    );
    return data;
  },
  async fetchPostInfo({ postId, token, userId }) {
    const { data } = await HttpClient.get(`/api/post/${postId}`, {
      headers: { token: `${token}/${userId}` },
    });
    return data;
  },
  async fetchAll({ userId, token }) {
    const { data } = await HttpClient.get('/api/post', {
      headers: { token: `${token}/${userId}` },
    });
    return data;
  },
  async delete({ postId, userId, token }) {
    const { data } = await HttpClient.delete(`/api/post/${postId}`, {
      headers: { token: `${token}/${userId}` },
    });
    return data;
  },
  async likePost({ postId, userId, token }) {
    const { data } = await HttpClient.post(
      `/api/post/${postId}/like`,
      {
        userId: userId,
      },
      {
        headers: { token: `${token}/${userId}` },
      }
    );
    return data;
  },
  async fetchPostForUser({ profileId, userId, token }) {
    const { data } = await HttpClient.get(`/api/post/user/${profileId}`, {
      headers: { token: `${token}/${userId}` },
    });
    return data;
  },
  async fetchFollowingPosts({ userId, token }) {
    const { data } = await HttpClient.get(`/api/post/${userId}/following`, {
      headers: { token: `${token}/${userId}` },
    });
    return data;
  },
};
