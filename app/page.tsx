import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Brain, BookOpen, Award } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Dr. Alex Chen</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#research" className="text-slate-600 hover:text-slate-900 transition-colors">
                Research
              </a>
              <a href="#publications" className="text-slate-600 hover:text-slate-900 transition-colors">
                Publications
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                AI Researcher &<span className="text-blue-600"> Machine Learning</span> Expert
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Passionate about advancing artificial intelligence through cutting-edge research in deep learning,
                natural language processing, and computer vision. Seeking opportunities to drive innovation in
                AI-forward organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <Brain className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              PhD in Computer Science with 5+ years of experience in AI research and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                I am a dedicated AI researcher with a strong background in machine learning, deep learning, and
                artificial intelligence. My work focuses on developing novel algorithms and architectures that push the
                boundaries of what's possible in AI.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                With publications in top-tier conferences and journals, I bring both theoretical depth and practical
                experience to complex AI challenges. I'm passionate about translating research into real-world
                applications that make a positive impact.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Publications</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">Citations</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold">PhD in Computer Science</div>
                      <div className="text-slate-600">Stanford University, 2019</div>
                    </div>
                    <div>
                      <div className="font-semibold">MS in Machine Learning</div>
                      <div className="text-slate-600">MIT, 2015</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-blue-600" />
                    Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>Best Paper Award - ICML 2023</div>
                    <div>Outstanding Researcher - NeurIPS 2022</div>
                    <div>Young Investigator Award - AAAI 2021</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Research Areas</h2>
            <p className="text-xl text-slate-600">Exploring the frontiers of artificial intelligence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Deep Learning</CardTitle>
                <CardDescription>Advanced neural architectures and optimization techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Transformers</Badge>
                  <Badge variant="secondary">CNNs</Badge>
                  <Badge variant="secondary">GANs</Badge>
                  <Badge variant="secondary">Attention</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Natural Language Processing</CardTitle>
                <CardDescription>Language understanding and generation systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">LLMs</Badge>
                  <Badge variant="secondary">BERT</Badge>
                  <Badge variant="secondary">GPT</Badge>
                  <Badge variant="secondary">Sentiment Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Computer Vision</CardTitle>
                <CardDescription>Visual perception and image understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Object Detection</Badge>
                  <Badge variant="secondary">Segmentation</Badge>
                  <Badge variant="secondary">Face Recognition</Badge>
                  <Badge variant="secondary">Medical Imaging</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Selected Publications</h2>
            <p className="text-xl text-slate-600">Recent contributions to the AI research community</p>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      "Attention-Based Neural Networks for Enhanced Language Understanding"
                    </h3>
                    <p className="text-slate-600 mb-2">
                      <strong>A. Chen</strong>, B. Smith, C. Johnson
                    </p>
                    <p className="text-slate-500">International Conference on Machine Learning (ICML) 2023</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-slate-700">
                  This paper introduces a novel attention mechanism that significantly improves language understanding
                  tasks across multiple benchmarks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      "Efficient Training of Large-Scale Vision Models"
                    </h3>
                    <p className="text-slate-600 mb-2">
                      <strong>A. Chen</strong>, D. Williams, E. Brown
                    </p>
                    <p className="text-slate-500">Conference on Neural Information Processing Systems (NeurIPS) 2022</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-slate-700">
                  We present a new training methodology that reduces computational costs while maintaining
                  state-of-the-art performance in computer vision tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      "Federated Learning for Privacy-Preserving AI"
                    </h3>
                    <p className="text-slate-600 mb-2">
                      <strong>A. Chen</strong>, F. Davis, G. Miller
                    </p>
                    <p className="text-slate-500">
                      Association for the Advancement of Artificial Intelligence (AAAI) 2022
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-slate-700">
                  A comprehensive study on federated learning approaches that enable collaborative AI training while
                  preserving data privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-600">Tools and technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-900">Programming</h3>
              <div className="space-y-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">R</Badge>
                <Badge variant="outline">C++</Badge>
                <Badge variant="outline">JavaScript</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-900">ML Frameworks</h3>
              <div className="space-y-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">Scikit-learn</Badge>
                <Badge variant="outline">Hugging Face</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-900">Cloud & Tools</h3>
              <div className="space-y-2">
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Google Cloud</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Kubernetes</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-slate-900">Databases</h3>
              <div className="space-y-2">
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Redis</Badge>
                <Badge variant="outline">Neo4j</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, and innovative AI projects. Feel free
            to reach out!
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="mailto:alex.chen@email.com"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span>alex.chen@email.com</span>
            </Link>
            <Link
              href="https://linkedin.com/in/alexchen"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/alexchen"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </Link>
          </div>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full CV
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-slate-400">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Dr. Alex Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
