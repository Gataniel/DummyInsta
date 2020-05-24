require 'faker'
require 'open-uri'

FactoryBot.define do
  sequence :email do |n|
    name = [Faker::Internet.user_name, n].join
    [name, Faker::Internet.domain_name].join('@')
  end

  factory :user do
    email
    password { 'password' }
    password_confirmation { password }
  end

  factory :like do
    association :reference, factory: :post
    association :user
  end

  factory :post do
    association :user
    description { Faker::Lorem.paragraph(sentence_count: 2) }

    before(:create) do |post, evaluator|
      downloaded_image = open("https://picsum.photos/200/300")
      post.img.attach(io: downloaded_image  , filename: "test.jpg")
    end
  end

  factory :comment do
    association :commentable, factory: :post
    association :user
    text { Faker::Lorem.paragraph(sentence_count: 2) }
  end
end
