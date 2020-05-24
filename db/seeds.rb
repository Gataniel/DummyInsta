# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

USERS_COUNT = 5
POSTS_COUNT = 20

# create users and posts
USERS_COUNT.times do |time|
  puts "//////// CREATING USER #{time + 1} /////////"
  puts "////////////////////"
  user = FactoryBot.create(:user)

  rand(5..10).times do
    post = FactoryBot.create(:post, user: user)
  end
end

# create comments
puts "//////// CREATING COMMENTS /////////"
puts "////////////////////"
User.find_each do |user|
  rand(0..10).times do
    FactoryBot.create(
      :comment,
      commentable: Post.order("RANDOM()").limit(1).first(), user: user
    )
  end
end

# create likes
puts "//////// CREATING LIKES /////////"
puts "////////////////////"
User.all.each_with_index do |user, index|
  posts = Post.order("RANDOM()").limit(Post.count).to_a

  rand(10..20).times do
    FactoryBot.create(:like, reference: posts.pop(), user: user)
  end
end
